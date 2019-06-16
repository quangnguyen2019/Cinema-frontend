import ApiService from './api.service';
import {URL} from './urls';

console.log('URL ==> ', URL);

const MovieService = {
    getMovies() {
        return ApiService.get(URL.GET_MOVIES);
    },
    getMovie(id) {
        return ApiService.get(URL.GET_MOVIE + id)
    },
    getMoviesNewly() {
        return ApiService.get(URL.GET_MOVIES_NEWLY)
    },
    getMoviesMostViews() {
        return ApiService.get(URL.GET_MOVIES_MOST_VIEWS)
    }
}

export default MovieService;