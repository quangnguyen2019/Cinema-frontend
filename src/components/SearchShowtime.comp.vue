<template>
    <div class="container mt-5">
        <div class="row searchByShowtime">
            <div class="col">
               <CinemaGroupSelector :cinemaGroupsData="cinemaGroups" @onClickTheater="LoadMovieList" />
            </div>

            <div class="col">
                <MovieSelector :moviesData="movies" @onClickMovie="LoadShowtimeList" />
            </div>

            <div class="col">
                <ShowtimeSelector :showtimesData="showtimes" />
            </div>
        </div>
    </div>
</template>

<script>
import { BASE_DOMAIN } from '../../services/urls'
import CinemaGroupService from '../../services/cinemaGroup.service'
import MovieService from '../../services/movie.service'
import ShowtimeService from '../../services/showtime.service'
import CinemaGroupSelector from './CinemaGroupSelector.comp'
import ShowtimeSelector from './ShowtimeSelector.comp'
import MovieSelector from './MovieSelector.comp'

export default {
    name: 'searchShowtime',
    components: {
        CinemaGroupSelector,
        MovieSelector,
        ShowtimeSelector
    },
    data() {
        return {
            cinemaGroups: [],
            movies: [],
            showtimes: [],
            cinemaGroupIdStored: -1
        }
    },
    created() {
        CinemaGroupService
            .getCinemaGroups()
            .then(response => {
                this.cinemaGroups = response.data;
            });
    },
    methods: {
        LoadMovieList(cinemaGroupId) {
            this.showtimes = [];

            MovieService
                .getMoviesByCinemaGroup(cinemaGroupId)
                .then(response => {
                    this.movies = response.data;
                    this.movies.forEach(movie => {
                        movie.poster_image = BASE_DOMAIN + '/image/poster/' + movie.poster_image;
                    });
                    this.cinemaGroupIdStored = cinemaGroupId;
                });
        },

        LoadShowtimeList(movieId) {
            ShowtimeService
                .getShowtimesByMovieAndCinemaGr(movieId, this.cinemaGroupIdStored)
                .then(response => {

                    this.showtimes = [];

                    response.data.forEach(data => {
                        var startTime = {
                            id: data.show_time_id,
                            time: data.start_time
                        }
                        
                        var existDate = this.showtimes.find(item => item.date === data.date_showing); 

                        if (existDate) {
                            existDate.startTimes.push(startTime);
                        }
                        else {
                            var showtime = {
                                date: data.date_showing,
                                startTimes: [startTime]
                            }

                            this.showtimes.push(showtime);
                        }
                    });

                    this.showtimes.forEach(showtime => {
                        showtime.startTimes.sort((st1, st2) => st1.time > st2.time ? 1 : -1);
                        showtime.startTimes.forEach(startTime => {
                            startTime.time = startTime.time.substr(0, 5);
                        });

                        var d = new Date(showtime.date);

                        var dayOfWeek = d.getDay() + 1;
                        dayOfWeek = dayOfWeek === 1 ? "Chủ Nhật" : "Thứ " + dayOfWeek;

                        showtime.dayOfWeek = dayOfWeek;
                        showtime.date = showtime.date.split('-').reverse().join('/');
                    });
                    
                    console.log('Showtimes: ', this.showtimes);
                });
        }
    }
}
</script>

<style>
    h5 {
        text-align: center;
    }

    .searchByShowtime ul {
        padding: 0;
    }

    .searchByShowtime li {
        list-style-type: none;
        border-bottom: 1px solid rgb(218, 218, 218);
    }

    .searchByShowtime li {
        color: gray;
        padding: 12px;
        display: block;
    }

    .searchByShowtime li:hover {
        text-decoration: none;
        color: #42b983;
        cursor: pointer;
   }

   .searchByShowtime li.active {
        color: #42b983;
        background-color: rgb(230, 230, 230);
        border-radius: 4px;
    }

    .selector-container {
        border: 1px solid rgb(218, 218, 218);
    }

    .selector-title {
        background-color: #42b983;
        color: #ffffff;
        padding: 8px;
        text-align: center;
    }

    .no-selector {
        text-align: center;
        padding: 10px;
    }
</style>
