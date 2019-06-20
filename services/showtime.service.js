import ApiService from './api.service'
import { URL } from './urls'

const ShowtimeService = {
    getShowTimes() {
        return ApiService.get(URL.GET_SHOWTIMES);
    },
    getAllInfoByShowtime(id) {
        return ApiService.get(URL.GET_ALL_INFO_BY_SHOWTIME + id);
    },
    getShowtimesByMovie(movieId) {
        return ApiService.get(URL.GET_SHOWTIMES_BY_MOVIE + movieId);
    },
    getShowtimesByMovieAndCinemaGr(movieId, cinemaGroupId) {
        return ApiService.get(URL.GET_SHOWTIMES_BY_MOVIE_AND_CINEMA_GROUP + movieId + '/' + cinemaGroupId);
    }
};

export default ShowtimeService;