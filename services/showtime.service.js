import ApiService from './api.service'
import { URL } from './urls'

const ShowtimeService = {
    getShowTimes() {
        return ApiService.get(URL.GET_SHOWTIMES);
    },
    getAllInfoByShowtime(id) {
        return ApiService.get(URL.GET_ALL_INFO_BY_SHOWTIME + id);
    },
    getShowtimesByMovie(id) {
        return ApiService.get(URL.GET_SHOWTIMES_BY_MOVIE + id);
    }
};

export default ShowtimeService;