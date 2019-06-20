import ApiService from './api.service';
import { URL } from './urls';

const BookingService = {
    addBooking(bookingInfo) {
        return ApiService.post(URL.ADD_BOOKING, bookingInfo);
    },
    getSeatsByShowtime(showtime_id) {
        return ApiService.get(URL.GET_SEATS_BY_SHOWTIME + showtime_id);
    },
    getBookingsByUser(user_id) {
        return ApiService.get(URL.GET_BOOKINGS_BY_USER + user_id);
    }
};

export default BookingService;