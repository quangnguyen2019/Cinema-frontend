<template>
    <div id="movie-list">
        <div class="container">
            <ul class="nav nav-tabs my-4">
                <li class="active li-tab" @click="getMoviesNewlyReleased"> PHIM ĐANG CHIẾU </li>
                <li> / </li>
                <li class="li-tab" @click="getMoviesHasMostViews"> PHIM ĐƯỢC XEM NHIỀU NHẤT </li>
            </ul>
            <MoviesList :moviesData="movies"></MoviesList>
        </div>
    </div>
</template>


<script>
import MovieService from '../../services/movie.service'
import MoviesList from '@/components/MoviesList.comp'
import { BASE_DOMAIN } from '../../services/urls'

export default {
    name: 'Home.comp',
    components: {
        MoviesList
    },
    data() {
        return {
            movies:[],
            moviesShowing: [],
            moviesFavorite: [],
            selectedTab: 'ByShowing'
        }
    },
    created() {
        MovieService
            .getMoviesNewly()
            .then(response => {
                // JSON responses are automatically parsed.
                this.moviesShowing = response.data;
                this.moviesShowing.forEach((movie) => {
                    movie.poster_image = BASE_DOMAIN + '/image/poster/' + movie.poster_image;
                });

                this.movies = this.moviesShowing;
            });
            
        MovieService
            .getMoviesMostViews()
            .then(response => {
                this.moviesFavorite = response.data;
                this.moviesFavorite.forEach(movie => {
                    movie.poster_image = BASE_DOMAIN + '/image/poster/' + movie.poster_image;
                })
            });
    },
    methods: {
        getMoviesNewlyReleased() {
            this.movies = this.moviesShowing;
        },
        getMoviesHasMostViews() {
            this.movies = this.moviesFavorite;
        }
    }
}
</script>

<style>
    #movie-list li {
        /* margin: 15px; */
        padding: 8px;
        font-size: 1.2rem;
        font-family: 'Roboto Condensed', sans-serif;
    }

    #movie-list .li-tab {
        cursor: pointer;
        transition: .2s;
    }

    #movie-list .li-tab:hover {
        color: #42b983;
        background: rgb(248, 248, 248);
        border-radius: 15px;
    }
</style>
