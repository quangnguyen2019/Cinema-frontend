const BASE_DOMAIN = 'http://localhost:1235';

const URL = {

    // Movie
    GET_MOVIES: BASE_DOMAIN + '/movies/getMovies',
    GET_MOVIE: BASE_DOMAIN + '/movies/getMovie/',
    GET_MOVIES_NEWLY: BASE_DOMAIN + '/movies/getMoviesNewlyReleased',
    GET_MOVIES_MOST_VIEWS: BASE_DOMAIN + '/movies/getMoviesHasMostViews',

    // User
    GET_USERS: BASE_DOMAIN + '/users/getUsers',
    GET_USER: BASE_DOMAIN + '/users/getUser/',
    ADD_USER: BASE_DOMAIN + '/users/addUser',

    // Cinema Group
    GET_CINEMA_GROUPS: BASE_DOMAIN + '/cinema-groups/getCinemaGroups',

    // Showtime
    GET_SHOWTIMES: BASE_DOMAIN + '/showtimes/getShowtimes',
    GET_ALL_INFO_BY_SHOWTIME: BASE_DOMAIN + '/showtimes/getAllInfoByShowtime/',
    GET_SHOWTIMES_BY_MOVIE: BASE_DOMAIN + '/showtimes/getShowtimesByMovie/',

    // Booking
    ADD_BOOKING: BASE_DOMAIN + '/bookings/addBooking',
    GET_SEATS_BY_SHOWTIME: BASE_DOMAIN + '/bookings/getSeatsByShowtime/'
}

export { URL, BASE_DOMAIN }