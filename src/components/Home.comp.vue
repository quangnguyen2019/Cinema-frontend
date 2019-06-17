<template>
    <div id="movie-list">
        <div class="container">

            <ul class="nav nav-tabs my-4">
                <li class="nav-item"  @click="getMoviesNewlyReleased"> 
                    <a href="#" data-toggle="tab" class="nav-link active">
                        PHIM ĐANG CHIẾU
                    </a>    
                </li>

                <li class="separator-line"> | </li>

                <li class="nav-item"  @click="getMoviesHasMostViews"> 
                    <a href="#" data-toggle="tab" class="nav-link">
                        PHIM ĐƯỢC XEM NHIỀU NHẤT
                    </a>    
                </li>
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
            this.selectedTab = 'ByShowing';
        },
        getMoviesHasMostViews() {
            this.movies = this.moviesFavorite;
            this.selectedTab = 'ByFavourite';
        }
    }
}
</script>

<style>
    #movie-list li {
        padding: 8px;
        font-size: 1.2rem;
        font-family: 'Roboto Condensed', sans-serif;
    }

    #movie-list .separator-line {
        padding-top: 15px;
    }

    #movie-list .nav-tabs .nav-link {
        border: none !important;
    }

    #movie-list .nav-link {
        color: black;
        transition: .2s;
    }

    #movie-list .nav-link:hover {
        color: #42b983;
    }
   
    #movie-list .active {
        -webkit-appearance: none;
        color: #42b983;
        background: rgb(245, 243, 243);
        border-radius: 15px;
        border: none;
    }
</style>
