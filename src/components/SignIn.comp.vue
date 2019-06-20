<template>
    <div class="wrapper-sign-in">
        <div class="modal fade" id="signIn" tabindex="-1" role="dialog" aria-labelledby="signInUpModal" aria-hidden="true">
            <div class="modal-dialog cascading-modal" role="document" style="width: 26rem">
                <div class="modal-content formSignIn">
                    <form class="modal-body" @submit.prevent="SignInAuth">
                        <!-- <form class="formSignIn" @submit.prevent="SignInAuth"> -->
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <h1 class="mt-3 mb-5 sign-in-title">Welcome</h1>

                        <div class="input-group">
                            <input type="text" id="emailSignIn" v-model="emailValue" required >
                            <label for="emailSignIn"> Email </label>
                        </div>
                        <div class="input-group">
                            <input type="password" id="passwordSignIn" v-model="passwordValue" required>
                            <label for="passwordSignIn"> Mật Khẩu </label>
                        </div>

                        <button type="submit" class="btnSign-In-UpForm">Đăng Nhập</button>

                        <!-- <p class="linkSignUp">
                            Don&apos;t have an account?
                            <router-link to="/signUp"> Sign Up </router-link>
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
    name: "Sign-In-Component",
    data() {
        return {
            user: {},
            emailValue: '',
            passwordValue: '',
        }
    },
    methods: {
        SignInAuth() {
            console.log(this.emailValue, this.passwordValue);
            UserService
                .getUser(this.emailValue)
                .then(response => {
                    this.user = response.data;

                    if (this.user.success === false) {
                        alert( "Email người dùng không tồn tại !!");
                        return;
                    }

                    if (this.user.password!= this.passwordValue) {
                        alert('Mật khẩu không đúng !!');
                        return;
                    }

                    // console.log('Logged User: ', this.user);
                    this.$session.start();
                    this.$session.set('user-id', this.user.id);
                    this.$session.set('first_name', this.user.first_name);
                    this.$session.set('surname', this.user.surname);
                    this.$session.set('user-email', this.user.email);
                    location.reload();
                });
        },
    }
}
</script>

<style>
    body {
        position: relative;
        overflow: hidden;
    }

    .sign-in-title {
        user-select: none;
    }

    #signIn .modal-dialog .modal-content {
        height: 35rem;
        /* width: 26rem; */
    }

    .formSignIn {
        background-color: #fff;
        padding: 2.5rem;
        border-radius: 20px;
        /* box-shadow: 2px 4px 12px rgb(0, 0, 0, 0.2); */
    }

    .formSignIn h1 {
        text-align: center;
    }

    .input-group {
        position: relative;
        margin-bottom: 46px;
    }

    .input-group input {
        border: none;
        border-bottom: 1px solid dodgerblue;
        display: block;
        outline: none;
        padding: 8px;
        width: 98%;
    }

    .input-group label {
        position: absolute;
        top: 10px;
        left: 12px;
        color: gray;
        transition: .3s;
    }

    .input-group input:focus + label, input:valid + label {
        top: -20px;
        left: 5px;
        color: rgb(0, 125, 250);
    }

    .btnSign-In-UpForm {
        width: 100%;
        padding: 15px;
        border: none;
        border-radius: 25px;
        color: #fff;
        background-size: 300% 100%;
        background-image: linear-gradient(120deg, #25aae1, #4481eb, #04befe, #3f86ed);
        transition: all .4s;
        box-shadow: 1px 4px 12px rgb(0, 0, 0, 0.4);
        margin-top: 25px;
    }

    .btnSign-In-UpForm:hover {
        background-position: 100% 0;
    }

    .btnSign-In-UpForm:focus {
        outline: none;
    }

    #error ul {
        padding: 8px;
    }

    #error li {
        list-style-type: none;
    }

    .linkSignUp {
        text-align: center;
        margin-top: 90px;
    }

    #snackbar {
        visibility: hidden;
        min-width: 250px;
        margin-left: -125px;
        background-color: #333;
        color: #fff;
        text-align: center;
        border-radius: 2px;
        padding: 16px;
        position: fixed;
        z-index: 1;
        left: 50%;
        top: 30px;
        font-size: 17px;
    }

    #snackbar.show {
        visibility: visible;
        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }

    @-webkit-keyframes fadein {
        from {top: 0; opacity: 0;} 
        to {top: 30px; opacity: 1;}
    }

    @keyframes fadein {
        from {top: 0; opacity: 0;}
        to {top: 30px; opacity: 1;}
    }

    @-webkit-keyframes fadeout {
        from {top: 30px; opacity: 1;} 
        to {top: 0; opacity: 0;}
    }

    @keyframes fadeout {
        from {top: 30px; opacity: 1;}
        to {top: 0; opacity: 0;}
    }
</style>
