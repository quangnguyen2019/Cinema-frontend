import ApiService from './api.service'
import { URL } from './urls'

const CinemaGroupService = {
    getCinemaGroups() {
        return ApiService.get(URL.GET_CINEMA_GROUPS);
    }
};

export default CinemaGroupService;