import ApiService from './api.service';
import {URL} from './urls';

console.log('URL ==> ', URL);

const MovieService = {
    getMovies() {
        return ApiService.get(URL.GET_MOVIES);
    },
    getMovie(movieId) {
        return ApiService.get(URL.GET_MOVIE + movieId)
    },
    getMoviesNewly() {
        return ApiService.get(URL.GET_MOVIES_NEWLY)
    },
    getMoviesMostViews() {
        return ApiService.get(URL.GET_MOVIES_MOST_VIEWS)
    },
    getMoviesByCinemaGroup(cinemaGroupId) {
        return ApiService.get(URL.GET_MOVIES_BY_CINEMA_GROUP + cinemaGroupId)
    }
}

export default MovieService;