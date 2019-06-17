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
                        <div class="seat-note">
                            <span class="seat seat-selected"></span>
                            <span class="note">Ghế đang có người chọn</span>
                        </div>
                        <div class="seat-note">
                            <span class="seat seat-booked"></span>
                            <span class="note">Ghế đã đặt</span>
                        </div>
                    </div>
                </div>

                <div class="col-5">
                    <div class="seat-container">
                        <img class="mb-5" src="@/assets/bg-screen.png" width=100%>

                        <div class="seat-row" v-for="character in charArray" :key="character">
                            <div class="seat" v-for="numb in numberArray" :key="numb">
                                {{ character }}{{ numb }}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-4">
                    <div class="book-info-container">
                        <div class="booking-title">Thông tin đặt vé</div>
                        <div class="booking-content">
                            <div class="info-row">
                                <span class="title">Phim:</span>
                                X-Men: Phượng Hoàng Bóng Tối
                            </div>
                            <div class="info-row">
                                <span class="title">Rạp:</span>
                                CGV Aeon Tân Phú
                            </div>
                            <div class="info-row">
                                <span class="title">Suất Chiếu:</span> 
                                Thứ 7 (17/6/2019) 19:40
                            </div>
                            <div class="info-row">
                                <span class="title">Ghế:</span> 
                                G5, G6
                            </div>
                            <div class="info-row total">
                                <span class="title">Tổng Cộng:</span> 
                                <span class="price">240.000 ₫</span>
                            </div>

                            <div class="btn-booking">
                                <button class="btn">Đặt Vé</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Booking.comp',
    data() {
        return {
            charArray: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
            numberArray: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13']
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

    .seat {
        display: inline-block;
        padding: 5px;
        background-color: rgb(209, 209, 209);
        margin: 3px 4px;
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
