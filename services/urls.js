const BASE_DOMAIN = 'http://localhost:1235';

const URL = {

    // Movie
    GET_MOVIES: BASE_DOMAIN + '/movies/getMovies',
    GET_MOVIE: BASE_DOMAIN + '/movies/getMovie/',

    // User
    GET_USERS: BASE_DOMAIN + '/users/getUsers',
    GET_USER: BASE_DOMAIN + '/users/getUser/',
    ADD_USER: BASE_DOMAIN + '/users/addUser',

    // Cinema Group
    GET_CINEMA_GROUPS: BASE_DOMAIN + '/cinema-groups/getCinemaGroups',

    // Showtime
    GET_SHOWTIMES: BASE_DOMAIN + '/showtimes/getShowtimes'
}

export { URL, BASE_DOMAIN }