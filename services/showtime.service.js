import ApiService from './api.service'
import { URL } from './urls'

const ShowtimeService = {
    getShowTimes() {
        return ApiService.get(URL.GET_SHOWTIMES);
    }
};

export default ShowtimeService;