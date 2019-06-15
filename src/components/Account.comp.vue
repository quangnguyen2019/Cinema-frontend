<template>
    <div class="wrapper">
        <div class="container mt-5">
            <div class="row user-infor">
                <div class="col-3">
                    <p>Hello Q</p>

                    <ul>
                    <li @click="isShowing ^= true">Personal Details</li>
                    <li>Ticket Booking History</li>
                    </ul>
                </div>

                <div class="col-9">
                    <iframe v-show="isShowing" src="http://www.weather.gov/" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from '../../services/user.service'

export default {
    name: 'Account.comp',
    data() {
        return {
            isShowing: false
        }
    }
}
</script>

<style>
    .wrapper .container {
        height: 100vh;
    }

    iframe {
        display: block;
        margin: 20px 0 0 20px;
        width: 100%;
        height: 100vh;
    }

    .user-infor ul {
        padding: 0;
    }

    .user-infor li {
        list-style-type: none;
        padding: 12px 20px;
        background-color: rgb(26, 26, 26);
        margin-bottom: 2px;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    }
</style>