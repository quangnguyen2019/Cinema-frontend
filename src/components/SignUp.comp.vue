<template>
    <div class="wrapper-sign-up">
        <form class="formSignUp" >
            <h1 class="mt-2 mb-5 text-center">Welcome</h1>

            <div class="input-group">
                <input type="text" id="name" v-model="userAdded.full_name" required>
                <label for="name"> Full Name </label>
            </div>

            <div class="input-group">
                <input type="text" id="email" v-model="userAdded.email" required>
                <label for="email"> Email </label>
            </div>

            <div class="input-group">
                <input type="password" id="password" v-model="userAdded.password" required>
                <label for="password"> Password </label>
            </div>

            <div class="input-group">
                <input type="text" id="phone" v-model="userAdded.phone" required >
                <label for="phone"> Phone Number </label>
            </div>

            <button type="button" class="btnSign-In-UpForm" @click.prevent="SignUpAuth">Sign Up</button>

            <div id="snackbar">{{ message }}</div>

            <p class="backToSignIn">
                <router-link to="/signIn"> Cancel </router-link>
                <router-view></router-view>
            </p>
        </form>
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
                    console.log(response1.data);

                    this.message = '';
                    

                    if (this.userAdded.full_name == '') {
                        this.message = 'Full Name is empty !!'
                        return;
                    }

                    if (this.userAdded.email == '') {
                        this.message = 'Email is empty !!'
                        return;
                    }

                    if (!this.ValidEmail(this.userAdded.email)) {
                        this.message = 'Invalid Email !!';
                        return;
                    }

                    if (response1.data.email == this.userAdded.email) {
                        this.message = 'Email already exists !!';
                        console.log(this.message);
                        return;
                    }

                    if (this.userAdded.password == '') {
                        this.message = 'Password is empty !!'
                        return;
                    }

                    if (this.userAdded.phone == '') {
                        this.message = 'Phone Number is empty !!'
                        return;
                    }

                    UserService
                        .addUser(this.userAdded)
                        .then(response => {
                            this.message = "Registered account successfully !!";
                            console.log(this.userAdded);
                        })
                    
                    setTimeout(() =>  this.$router.push('/signIn'), 2500);
                })

            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
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
        width: 35rem;
        height: 44rem;
        border-radius: 25px;
        box-shadow: 2px 4px 12px rgb(0, 0, 0, .3)
    }

    .backToSignIn {
        margin-top: 50px;
        text-align: center;
    }
</style>
