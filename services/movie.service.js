import ApiService from './api.service';
import {URL} from './urls';

console.log('URL ==> ', URL);

const MovieService = {
    getMovies() {
        return ApiService.get(URL.GET_MOVIES);
    },
    getMovie(id) {
        return ApiService.get(URL.GET_MOVIE + id)
    }
}

export default MovieService;