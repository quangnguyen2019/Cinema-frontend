<template>
    <div class="wrapper-sign-in">
        <form class="formSignIn" @submit.prevent="SignInAuth">
            <h1 class="mt-3 mb-5">Welcome</h1>

            <div class="input-group">
                <input type="text" id="email" v-model="emailValue" required >
                <label for="email"> Email </label>
            </div>
            <div class="input-group">
                <input type="password" id="password" v-model="passwordValue" required>
                <label for="password"> Password </label>
            </div>

            <button type="submit" class="btnSign-In-UpForm">Sign In</button>

            <div id="snackbar">{{ error }}</div>

            <p class="linkSignUp">
                Don&apos;t have an account?
                <router-link to="/signUp"> Sign Up </router-link>
                <router-view></router-view>
            </p>
        </form>
    </div>
</template>

<script>
import UserService from '../../services/user.service'
import Axios from 'axios'

export default {
    name: "Sign-In-Component",
    data() {
        return {
            user: {},
            emailValue: '',
            passwordValue: '',
            error: ''
        }
    },
    methods: {
        SignInAuth() {
            console.log(this.emailValue, this.passwordValue);
            UserService
                .getUser(this.emailValue)
                .then(response => {
                    this.user = response.data;

                    if (this.emailValue === '') {
                        this.error = 'Email is empty !!';
                    }

                    if (this.user.success === false) {
                        this.error = "User Account does not exist !!";
                        return;
                    }

                    if (this.passwordValue === '') {
                        this.error = 'Password is empty !!';
                        return;
                    }

                    if (this.user.password != this.passwordValue) {
                        this.error = 'Password does not correct !!';
                        return;
                    }

                    this.$session.start()
                    this.$session.set('user-id', this.user.id)
                    this.$router.push('/');
                });

            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }
    }
}
</script>

<style>
    html {
        overflow: scroll;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        width: 3px; 
    }

    ::-webkit-scrollbar-thumb {
        background: rgb(160, 160, 160);
    }

    body {
        font-family: sans-serif;
        background-color: rgb(239, 239, 239);
        position: relative;
    }

    .wrapper-sign-in {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 15%;
        left: 36%;
        height: 100vh;
    }

    .formSignIn {
        background-color: #fff;
        padding: 3rem;
        border-radius: 20px;
        height: 35rem;
        width: 25rem;
        box-shadow: 2px 4px 12px rgb(0, 0, 0, 0.2);
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
        padding: 13px;
        border: none;
        border-radius: 25px;
        color: #fff;
        background-size: 300% 100%;
        background-image: linear-gradient(120deg, #25aae1, #4481eb, #04befe, #3f86ed);
        transition: all .4s;
        box-shadow: 1px 4px 12px rgb(0, 0, 0, 0.4);
        margin-top: 15px;
    }

    .btnSign-In-UpForm:hover {
        background-position: 100% 0;
    }

    .btnSign-In-UpForm:focus {
        /* outline: none; */
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
