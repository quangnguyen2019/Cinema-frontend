<template>
    <div class="container mt-5">
        <div class="row searchByShowtime">
            <div class="col-4">
               <h5 class="mb-4">CHOOSE A THEATER</h5>
               <CinemaGroupSelector :cinemaGroupsData="cinemaGroups"  @clickedSomething='handleClickParent' />
            </div>

            <div class="col-4">
                <h5 class="mb-4">CHOOSE A MOVIE</h5>
                <MovieSelector :moviesData="movies" />
            </div>

            <div class="col-4">
                <h5 class="mb-4">CHOOSE A SHOWTIME</h5>
                <ul>
                    <li>Cinema</li>
                    <li>Cinema</li>
                    <li>Cinema</li>
                    <li>Cinema</li>
                    <li>Cinema</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import CinemaGroupService from '../../services/cinemaGroup.service'
import MovieService from '../../services/movie.service'
import ShowtimeService from '../../services/showtime.service'
import CinemaGroupSelector from './CinemaGroupSelector.comp'
import MovieSelector from './MovieSelector.comp'

export default {
    name: 'searchShowtime',
    components: {
        CinemaGroupSelector,
        MovieSelector
    },
    data() {
        return {
            cinemaGroups: [],
            movies: [],
            showtimes: []
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
        LoadMovieList() {
            MovieService
                .getMovies()
                .then(response => {
                    this.movies = response.data;
                });
        },
        handleClickParent() {
            console.log('Hello');
        }
    }
}
</script>

<style>
    h5 {
        text-align: center;
    }

    .searchByShowtime li {
        list-style-type: none;
        border-bottom: 1px solid rgb(209, 209, 209);
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

   .searchByShowtime li:active {
       color: rgb(146, 7, 30);
   }
</style>
