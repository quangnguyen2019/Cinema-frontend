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
                            <input type="text" id="name" v-model="userAdded.full_name" required>
                            <label for="name"> Full Name </label>
                        </div>

                        <div class="input-group">
                            <input type="text" id="email-sign-up" v-model="userAdded.email" required>
                            <label for="email-sign-up"> Email </label>
                        </div>

                        <div class="input-group">
                            <input type="password" id="password-sign-up" v-model="userAdded.password" required>
                            <label for="password-sign-up"> Password </label>
                        </div>

                        <div class="input-group">
                            <input type="text" id="phone" v-model="userAdded.phone" required >
                            <label for="phone"> Phone Number </label>
                        </div>

                        <button type="submit" class="btnSign-In-UpForm">Sign Up</button>

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
                full_name: '',
                email: '',
                password: '',
                phone: '',
                role: 0
            },
            userDatabase: {},
            message: ''
        }
    },
    methods: {
        SignUpAuth() {
            UserService
                .getUser(this.userAdded.email)
                .then(response1 => {

                    if (this.userAdded.full_name == '') {
                        alert('Full Name is empty !!');
                        return;
                    }

                    if (this.userAdded.email == '') {
                        alert('Email is empty !!');
                        return;
                    }

                    if (!this.ValidEmail(this.userAdded.email)) {
                        alert('Invalid Email !!');
                        return;
                    }

                    if (response1.data.email == this.userAdded.email) {
                        alert('Email already exists !!');
                        return;
                    }

                    if (this.userAdded.password == '') {
                        alert('Password is empty !!');
                        return;
                    }

                    if (this.userAdded.phone == '') {
                        alert('Phone Number is empty !!');
                        return;
                    }

                    UserService
                        .addUser(this.userAdded)
                        .then(response => {
                            alert("Đăng ký thành công !!");
                            // console.log(this.userAdded);
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
        height: 45rem;
        border-radius: 25px;
        box-shadow: 2px 4px 12px rgb(0, 0, 0, .3)
    }

    /* #signUp .btnSign-In-UpForm {
        padding: 15px 0; 
    } */

    .backToSignIn {
        margin-top: 50px;
        text-align: center;
    }
</style>
