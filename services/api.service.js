import axios from 'axios'

const ApiService = {
    get(resource, data) {
        return axios.get(resource)
    },

    post(resource, data) {
        return axios.post(resource, data)
    },

    delete(resource, data) {
        return axios.delete(resource, data)
    },

    put(resource, data) {
        return axios.put(resource, data)
    }
}

export default ApiService;