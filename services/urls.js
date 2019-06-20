const BASE_DOMAIN = 'http://localhost:1235';

const URL = {

    // Movie
    GET_MOVIES: BASE_DOMAIN + '/movies/getMovies',
    GET_MOVIE: BASE_DOMAIN + '/movies/getMovie/',
    GET_MOVIES_NEWLY: BASE_DOMAIN + '/movies/getMoviesNewlyReleased',
    GET_MOVIES_MOST_VIEWS: BASE_DOMAIN + '/movies/getMoviesHasMostViews',
    GET_MOVIES_BY_CINEMA_GROUP: BASE_DOMAIN + '/movies/getMoviesByCinemaGroup/',

    // User
    GET_USERS: BASE_DOMAIN + '/users/getUsers',
    GET_USER: BASE_DOMAIN + '/users/getUser/',
    ADD_USER: BASE_DOMAIN + '/users/addUser',
    UPDATE_USER: BASE_DOMAIN + '/users/updateUser/',

    // Cinema Group
    GET_CINEMA_GROUPS: BASE_DOMAIN + '/cinemaGroups/getCinemaGroups',

    // Showtime
    GET_SHOWTIMES: BASE_DOMAIN + '/showtimes/getShowtimes',
    GET_ALL_INFO_BY_SHOWTIME: BASE_DOMAIN + '/showtimes/getAllInfoByShowtime/',
    GET_SHOWTIMES_BY_MOVIE: BASE_DOMAIN + '/showtimes/getShowtimesByMovie/',
    GET_SHOWTIMES_BY_MOVIE_AND_CINEMA_GROUP: BASE_DOMAIN + '/showtimes/getShowtimesByMovieAndCinemaGr/',

    // Booking
    ADD_BOOKING: BASE_DOMAIN + '/bookings/addBooking',
    GET_SEATS_BY_SHOWTIME: BASE_DOMAIN + '/bookings/getSeatsByShowtime/',
    GET_BOOKINGS_BY_USER: BASE_DOMAIN + '/bookings/getBookingsByUser/'
}

export { URL, BASE_DOMAIN }