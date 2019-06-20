<template>
    <div class="wrapper">
        <div class="container mt-5">
            <div class="row user-infor">
                <div class="col-3">
                    <ul class="mt-5">
                        <li :class="{ active: isShowInfo }" @click="ShowInfoOption">Thông Tin Người Dùng</li>
                        <li :class="{ active: isShowHistory }" @click="ShowHistoryOption">Lịch Sử Đặt Vé</li>
                    </ul>
                </div>

                <div class="col-9">
                    <div class="row">
                        <div class="col-7" v-if="isShowInfo">
                            <form class="container-user-detail" @submit.prevent="updateInfo">
                                <h5 class="info-tittle">Thông Tin Người Dùng</h5>

                                <div class="mt-4">
                                    <div class="info">
                                        <b>Họ: </b>
                                        <input type="text" class="surname-detail" 
                                            v-model="user.surname">
                                    </div>
                                    <div class="info">
                                        <b>Tên: </b>
                                        <input type="text" class="first-name-detail" 
                                            v-model="user.first_name">
                                    </div>
                                    <div class="info">
                                        <b>Email: </b>
                                        <input type="text" class="email-detail" 
                                            v-model="user.email">
                                    </div>
                                    <div class="info">
                                        <b>SĐT: </b>
                                        <input type="text" class="phone-detail" 
                                            v-model="user.phone">
                                    </div>
                                </div>
                                
                                <button class="btn-update" >Cập Nhật</button> 
                            </form>
                        </div>

                        <div class="booking-history" v-if="isShowHistory">
                            <table class="table table-striped">
                                <tr>
                                    <th>Tên Phim</th>
                                    <th>Tên Rạp</th>
                                    <th>Phòng</th>
                                    <th>Ngày Chiếu</th>
                                    <th>Giờ Bắt Đầu</th>
                                    <th>Ghế</th>
                                </tr>
                                <tr v-for="(booking, index) in bookingArray" :key="index">
                                    <td>{{ booking.movie_name }}</td>
                                    <td>{{ booking.cinema_gr_name }}</td>
                                    <td>{{ booking.room }}</td>
                                    <td>{{ booking.date_showing }}</td>
                                    <td>{{ booking.start_time }}</td>
                                    <td>{{ booking.seats }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from '../../services/user.service'
import BookingService from '../../services/booking.service'

export default {
    name: 'Account.comp',
    data() {
        return {
            user: {},
            bookingArray: [],
            isShowInfo: true,
            isShowHistory: false
        }
    },
    created() {
        UserService
            .getUser(this.$session.get('user-email'))
            .then(response => {
                this.user = response.data;
            });

        BookingService
            .getBookingsByUser(this.$session.get('user-id'))
            .then(response => {
                this.bookingArray = response.data;
                
                this.bookingArray.forEach(booking => {
                    booking.start_time = booking.start_time.substr(0, 5);
                    booking.total = booking.total.split('.').splice(0, 1)[0];
                });
            });
    },
    methods: {
        updateInfo() {
            UserService
                .updateUser(this.user.id, this.user)
                .then(response => {
                    console.log("User: ", this.user);
                });
        },
        ShowInfoOption() {
            this.isShowInfo = true;
            this.isShowHistory = false;
            this.isActive = !this.isActive;
        },
        ShowHistoryOption() {
            this.isShowInfo = false;
            this.isShowHistory = true;
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style>
    .wrapper .container {
        height: 80vh;
    }

    .user-infor ul {
        padding: 0;
    }

    .user-infor li {
        list-style-type: none;
        padding: 12px 20px;
        background-color: rgb(85, 85, 85);
        margin-bottom: 2px;
        color: white;
        border-radius: 4px;
        cursor: pointer;
        transition: .2s;
    }

    .user-infor .col-9 {
        background: white;
        border-radius: 5px;
        min-height: 30rem;
    }

    .container-user-detail {
        padding: 44px 30px 30px 72px;
    }

    .container-user-detail .info {
        padding: 12px 0;
    }

    .booking-history {
        width: 100%;
        padding: 20px;
        text-align: center;
    }

    .info-tittle {
        text-align: left;
    }

    .surname-detail {
        margin-left: 74px;
        padding: 6px 50px 6px 12px;
    }

    .first-name-detail {
        margin-left: 67px;
        padding: 6px 50px 6px 12px;
    }

    .email-detail {
        margin-left: 52px;
        padding: 6px 50px 6px 12px;
    }

    .phone-detail {
        margin-left: 64px;
        padding: 6px 50px 6px 12px;
    }

    .btn-update {
        padding: 6px 10px;
        border: 2px solid rgba(221,111,27,1);
        border-radius: 5px;
        width: 33%;
        float: right;
        margin-top: 20px;
        background: rgb(230, 229, 229);
    }

    .user-infor .active {
        background: black;
    }
</style>