<template>
    <div class="wrapper-sign-up">
        <div class="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="signInUpModal" aria-hidden="true">
            <div class="modal-dialog cascading-modal" role="document">
                <div class="modal-content formSignUp">
                   <form class="modal-body" @submit.prevent="SignUpAuth">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <h1 class="mt-2 mb-5 text-center">Welcome</h1>

                        <div class="input-group">
                            <input type="text" id="surname" v-model="userAdded.surname" required>
                            <label for="name"> Họ </label>
                        </div>

                        <div class="input-group">
                            <input type="text" id="first_name" v-model="userAdded.first_name" required>
                            <label for="name"> Tên </label>
                        </div> 

                        <div class="input-group">
                            <input type="text" id="email-sign-up" v-model="userAdded.email" required>
                            <label for="email-sign-up"> Email </label>
                        </div>

                        <div class="input-group">
                            <input type="password" id="password-sign-up" v-model="userAdded.password" required>
                            <label for="password-sign-up"> Mật Khẩu </label>
                        </div>

                        <div class="input-group">
                            <input type="text" id="phone" v-model="userAdded.phone" required >
                            <label for="phone"> SĐT </label>
                        </div>

                        <button type="submit" class="btnSign-In-UpForm">Đăng Ký</button>

                        <!-- <p class="backToSignIn">
                            <router-link to="/signIn"> Cancel </router-link>
                            <router-view></router-view>
                        </p> -->
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from '../../services/user.service'

export default {
    name: 'Sign-Up-Component',
    data() {
        return {
            userAdded: {
                first_name: '',
                surname: '',
                email: '',
                password: '',
                phone: '',
                role: 0
            }
        }
    },
    methods: {
        SignUpAuth() {
            UserService
                .getUser(this.userAdded.email)
                .then(response1 => {

                    if (!this.ValidEmail(this.userAdded.email)) {
                        alert('Email không hợp lệ !!');
                        return;
                    }

                    if (response1.data.email == this.userAdded.email) {
                        alert('Email đã tồn tại !!');
                        return;
                    }

                    UserService
                        .addUser(this.userAdded)
                        .then(response => {
                            alert("Đăng ký thành công !!");
                            location.reload();
                        })
                    
                    // setTimeout(() =>  this.$router.push('/'), 1500);
                })
        },

        ValidEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>

<style>
    .wrapper-sign-up {
        position: absolute;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        width: 30rem;
        left: 33%;
        top: 6rem;
        margin-bottom: 60px;
    }

    .formSignUp {
        padding: 60px;
        width: 31rem;
        height: 50rem;
        border-radius: 25px;
        box-shadow: 2px 4px 12px rgb(0, 0, 0, .3)
    }

    .backToSignIn {
        margin-top: 50px;
        text-align: center;
    }
</style>
