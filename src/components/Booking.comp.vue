<template>
    <div id="booking">
        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                    <div class="seat-note-container">
                        <div class="seat-note">
                            <span class="seat"></span>
                            <span class="note">Ghế có thể đặt</span>
                        </div>
                        <div class="seat-note">
                            <span class="seat seat-selecting"></span>
                            <span class="note">Ghế đang chọn</span>
                        </div>
                        <!-- <div class="seat-note">
                            <span class="seat seat-selected"></span>
                            <span class="note">Ghế đang có người chọn</span>
                        </div> -->
                        <div class="seat-note">
                            <span class="seat seat-booked"></span>
                            <span class="note">Ghế đã đặt</span>
                        </div>
                    </div>
                </div>

                <div class="col-5">
                    <div class="seat-container">
                        <img class="mb-5" src="@/assets/bg-screen.png" width=100%>

                        <div class="seat-row" >
                            <div class="seat seat-display" 
                                v-bind:class="{ 'seat-selecting': seat.isSelected, 'seat-booked': seat.booked}" 
                                v-for="(seat, index) in seats" :key="index"
                                @click="selectSeat(seat)">
                                    {{ seat.name }}
                            </div>
                        </div>

                        <!-- <div class="seat-row" v-for="character in charArray" :key="character">
                            <span v-for="numb in numberArray" :key="numb">
                                <input type="checkbox" class="seat" :id="character+numb" :value="character+numb" v-model="seats"/>
                                <label :for="character+numb">{{ character }}{{ numb }}</label>
                            </span>
                        </div> -->
                    </div>
                </div>
                
                <div class="col-4">
                    <div class="book-info-container">
                        <div class="booking-title">Thông tin đặt vé</div>
                        <form class="booking-content" @submit.prevent="Booking" v-for="(infor,index) in infoBooking" :key="index">
                            <div class="info-row">
                                <span class="title">Phim:</span>
                                {{ infor.movie_name }}
                            </div>
                            <div class="info-row">
                                <span class="title">Rạp:</span>
                                {{ infor.cinema_group_name }}
                            </div>
                            <div class="info-row">
                                <span class="title">Suất Chiếu:</span> 
                                {{ infor.start_time }}
                            </div>
                            <div class="info-row">
                                <span class="title">Ghế:</span> 
                                <span>{{ selectingSeatsText }}</span>
                                <!-- <span v-for="seat in seats" :key="seat"> {{ seat }}, </span> -->
                            </div>
                            <div class="info-row total">
                                <span class="title">Tổng Cộng:</span> 
                                <span class="price">{{ priceTotal }} ₫</span>
                            </div>

                            <div class="btn-booking">
                                <button type="submit" class="btn">Đặt Vé</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ShowtimeService from "../../services/showtime.service"
import BookingService from '../../services/booking.service'

export default {
    name: 'Booking.comp',
    data() {
        return {
            seats: [],
            infoBooking: [],
            bookedSeats: [],
            selectingSeatsText: '',
            priceTotal: 0
        }
    },
    created() {
        // Tao ra day ghe trong rap
        var charArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
        
        charArray.forEach(char => {
            for (let i = 1; i <= 13; i++) {
                let seat = {
                    name: char + i,
                    isSelected: false,
                    booked: false
                }
                this.seats.push(seat);
            }
        });

        ShowtimeService
            .getAllInfoByShowtime(this.$route.params.id)
            .then(response => {
                this.infoBooking = response.data;
            });

        BookingService
            .getSeatsByShowtime(this.$route.params.id)
            .then(response => {
                console.log("responst data: ", response.data);

                response.data.forEach(val => {
                    this.bookedSeats = this.bookedSeats.concat(val.seats.split(', '));
                });

                this.seats.forEach(seat => {
                    if (this.bookedSeats.indexOf(seat.name) >= 0) {
                        seat.booked = true;
                    }
                });
            });
    },
    methods: {
        selectSeat(seat) {
            // Neu ghe da dat, thi khong lam gi nua
            if (seat.booked) {
                return;
            }

            seat.isSelected = !seat.isSelected;

            let selectingSeats = [];

            this.seats.forEach(seat => {
                if (seat.isSelected) {
                    selectingSeats.push(seat.name);
                }
            });

            this.selectingSeatsText = selectingSeats.join(', ');
            this.priceTotal = selectingSeats.length * this.infoBooking[0].price;
        },

        Booking() {
            if (this.selectingSeatsText === '') {
                alert(" Bạn chưa chọn ghế !");
            }
            else {
                let d = new Date();

                let bookingInfo = {
                    user_id: this.$session.get('user-id'),
                    showtime_id: this.$route.params.id,
                    created_date: d.toDateString().substr(4),
                    created_time: d.toTimeString().substr(0,8),
                    seats: this.selectingSeatsText,
                    total: this.priceTotal
                }

                BookingService
                    .addBooking(bookingInfo)
                    .then(response => {
                        console.log("Hello success");
                        alert("Đã đặt vé thành công !");
                    });

                // console.log(bookingInfo);
            }
        }
    }
}
</script>

<style>
    #booking .container-fluid {
        height: 100vh;
        padding: 0 30px;
    }

    .seat-container {
        padding-top: 40px;
    }

    .seat-row {
        text-align: center;
    }

    .seat-row input {
        -webkit-appearance: none;
        display: inline-block;
        width: 30px;
        height: 25px;
        background-color: #c7c7c7;
        position: relative;
    }

    .seat-row label {
        /* position: absolute; */
        top: 10px;
    }

    .seat-display {
        display: inline-block;
    }

    .seat {
        display: inline-block;
        padding: 5px;
        background-color: rgb(209, 209, 209);
        margin: 3px 3px;
        font-size: 12px;
        font-weight: 600;
        border-radius: 4px;
        width: 32px;
    }

    .seat:hover {
        cursor: pointer;
    }

    .seat-selecting {
        background: yellow;
    }

    .seat-selected {
        background: green;
    }

    .seat-booked {
        background: red;
    }

    .seat-note-container {
        margin-top: 80px;
    }

    .seat-note {
        overflow: auto;
        margin-bottom: 10px;
    }

    .seat-note .seat {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        float: left;
    }

    .seat-note .note {
        float: left;
        line-height: 30px;
    }

    .book-info-container {
        margin-top: 40px;
        box-shadow: 0 3px 10px 5px rgba(0, 0, 0, .15);
        margin-bottom: 40px;
    }

    .booking-title {
        font-size: 18px;
        background: #42b983;
        color: #ffffff;
        font-weight: bold;
        text-align: center;
        padding: 8px;
    }

    .booking-content {
        padding: 5px 25px;
    }

    .info-row {
        margin-top: 10px;
    }

    .info-row .title {
        width: 130px;
        display: inline-block;
        font-weight: bold;
    }

    .total {
        border-top: 2px solid rgb(133, 133, 133);
        padding-top: 10px;
        font-size: 20px;
    }

    .price {
        color: red;
    }

    .btn-booking {
        margin: 20px;
        text-align: center;
    }

    .btn-booking .btn {
        padding: 12px;
        width: 50%;
        background: rgb(218, 218, 218);
    }

</style>
