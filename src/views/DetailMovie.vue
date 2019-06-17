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
                    <router-link to="/searchShowtime">
                        <div class="btn-booking-movie-detail">ĐẶT VÉ</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { BASE_DOMAIN } from '../../services/urls'
import MovieService from '../../services/movie.service'

export default {
    name: "MovieDetail",
    data() {
        return {
            movie: {}
        }
    },
    created() {
        MovieService
            .getMovie(this.$route.params.id)
            .then(response => {
                this.movie = response.data;
                this.movie.poster_image = BASE_DOMAIN + '/image/poster/' + this.movie.poster_image;
            });
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
    
</style>