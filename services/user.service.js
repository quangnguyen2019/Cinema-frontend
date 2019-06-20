import ApiService from "./api.service"
import { URL } from './urls'

const UserService = {
    getUser(email) {
        return ApiService.get(URL.GET_USER + email)
    },
    addUser(user) {
        return ApiService.post(URL.ADD_USER, user)
    },
    updateUser(id, newInfo) {
        return ApiService.patch(URL.UPDATE_USER + id, newInfo);
    }
}
export default UserService