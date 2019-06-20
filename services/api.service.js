import axios from 'axios'

const ApiService = {
    get(resource) {
        return axios.get(resource)
    },

    post(resource, data) {
        return axios.post(resource, data)
    },

    delete(resource, data) {
        return axios.delete(resource, data)
    },

    patch(resource, data) {
        return axios.patch(resource, data)
    }
}

export default ApiService;