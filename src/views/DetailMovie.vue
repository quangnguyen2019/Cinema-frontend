<template>
    <div id="movie-detail">
        <div class="container my-5">
            <h2>Nội Dung Phim</h2>
            <hr>
            <div class="row">
                <div class="col-3">
                    <img :src="movie.poster_image" width="220px">
                </div>
                <div class="col-9">
                    <h4> {{ movie.name }} </h4>
                    <br>
                    <h6> Khởi Chiếu: {{ movie.publish_date }}</h6>
                    <h6> Thời Lượng: {{ movie.duration }} phút </h6>
                    <!-- <router-link to="/searchShowtime">
                        <div class="btn-booking-movie-detail">ĐẶT VÉ</div>
                    </router-link> -->
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="mt-5">
                        <h4>Lịch Chiếu</h4>
                        <hr>
                        <div v-for="(showtime, index) in showtimes" :key="index">
                            
                            <div class="date">{{ showtime.dayOfWeek }} ({{ showtime.date }})</div>
                            <div>
                                <router-link class="start-time" :to="'/booking/' + startTime.id"
                                    v-for="(startTime, index) in showtime.startTimes" :key="index"
                                    @click.native.prevent="onClickShowtime(startTime.id)">
                                    <b> {{ startTime.time }} </b> - {{ startTime.cinemaGroup }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { BASE_DOMAIN } from '../../services/urls'
import MovieService from '../../services/movie.service'
import ShowtimeService from '../../services/showtime.service'

export default {
    name: "MovieDetail",
    data() {
        return {
            movie: {},
            showtimes: []
        }
    },
    created() {
        MovieService
            .getMovie(this.$route.params.id)
            .then(response => {
                this.movie = response.data;
                this.movie.poster_image = BASE_DOMAIN + '/image/poster/' + this.movie.poster_image;
                this.movie.publish_date = this.movie.publish_date.split('-').reverse().join('/');
            });

        ShowtimeService
            .getShowtimesByMovie(this.$route.params.id)
            .then(response => {
                console.log('Hello');
                console.log(response.data);

                let showtimesList = [];

                response.data.forEach(data => {
                    let startTime = { 
                        id: data.show_time_id,
                        time: data.start_time,
                        cinemaGroup: data.cinemagroup
                    };

                    let exist = showtimesList.find(item => item.date === data.date_showing);

                    if (exist) {
                        exist.startTimes.push(startTime);
                    } else {
                        let showtime = {
                            date: data.date_showing,
                            startTimes: [startTime]
                        }
                        showtimesList.push(showtime);
                    }
                });

                showtimesList.forEach(showtime => {
                    showtime.startTimes.sort((a, b) => a.time > b.time ? 1 : -1);
                    showtime.startTimes.forEach(item => {
                        item.time = item.time.substr(0, 5);
                    });

                    let d = new Date(showtime.date);

                    let dayOfWeek = d.getDay() + 1;
                    dayOfWeek = dayOfWeek === 1 ? 'Chủ nhật' : `Thứ ${dayOfWeek}`;

                    let date = showtime.date.split("-").reverse().join("/");
                    
                    showtime.dayOfWeek = dayOfWeek;
                    showtime.date = date;
                    
                });

                this.showtimes = showtimesList;
                console.log('Showtime ==> ', showtimesList);
            });
    },
    methods: {
        onClickShowtime(bookingId) {
            if (!this.$session.exist()) {
                // e.preventDefault();
                // e.stopPropagation();
                alert("Bạn cần đăng nhập trước khi dùng tính năng này !!");
            }
        }
    }
}
</script>

<style>
    h4, h6 {
        font-weight: 600;
    }

    #movie-detail a {
        color: #fff;
    }

    #movie-detail a:hover {
        text-decoration: none;
    }

    .btn-booking-movie-detail {
        width: 200px;
        height: 50px;
        margin-top: 160px;
        padding: 12px;
        text-align: center;
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 500;
        border-radius: 25px;
        background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);
        box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
        background-size: 300% 100%;
        transition: all .4s ease-in-out;
    }

    .btn-booking-movie-detail:hover {
        background-position: 100% 0;
        transition: all .4s ease-in-out;
    }
    
    .date {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .start-time {
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 15px;
        color: black !important;
        padding: 2px 8px;
        border: 1px solid gray;
        border-radius: 4px;
    }
</style>