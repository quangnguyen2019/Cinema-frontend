<template>
    <div id="movie-list">
        <div class="container">
            <h1 class="my-5 text-center"> Movie </h1>
            
            <div class="row">
                <div class="col-md-3 top-films" v-for="movie in movies" :key="movie.id">
                    <router-link :to="'/movie/' + movie.id">
                        <img v-bind:src="movie.poster_image" class="card-img-top mb-3" height="86%"> 
                    </router-link> 
                    <router-view></router-view>

                    <div class="top-films-title">
                        <router-link :to="'/movie/' + movie.id">
                            {{ movie.name }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MovieService from '../../services/movie.service'
import { BASE_DOMAIN } from '../../services/urls'

export default {
    name: 'HomeComponent',
    data() {
        return {
            movies: []
        }
    },
    created() {
        MovieService
            .getMovies()
            .then(response => {
                // JSON responses are automatically parsed.
                this.movies = response.data;
                this.movies.forEach((movie) => {
                    movie.poster_image = BASE_DOMAIN + '/image/poster/' + movie.poster_image;
                });
            }
        )
    },
    mounted() {
        console.log('The component is mounted.');
    }
}
</script>

<style scoped>
    .top-films {
        box-sizing: border-box;
        margin-bottom: 40px;
    }

    .top-films a {
        color: black;
    }

    .top-films-title {
        box-sizing: border-box;
        text-align: center;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 1.1rem;
        font-weight: 600;
        letter-spacing: 2px;
    }

    .top-films-title a:hover {
        text-decoration: none;
    }

</style>
