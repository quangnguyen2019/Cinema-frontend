<template>
  <div id="app">
    <div class="container-fluid">
      <div class="container">
        <div id="nav">
          <nav class="navbar navbar-expand-lg navbar-light">
            <router-link class="navbar-brand mr-5" to="/" href="/">CINEMA</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                      <router-link class="nav-link" to="/about">About</router-link>
                  </li>
              </ul>

              <button class="btnSignIn" data-toggle="modal" data-target="#signIn" v-if="!this.$session.exists()">
                  Sign In
              </button>
              <button class="btn btn-outline-success ml-3" @click='SignOut' v-else>Sign Out</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
    
    <SignIn />
    <router-view></router-view>
  </div>
</template>

<script>
import SignIn from '@/views/SignIn'

export default {
  components: {
    SignIn
  },
  methods: {
    SignOut() {
      this.$session.destroy();
      location.reload();
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .container-fluid {
    box-shadow: 1px 2px 12px rgb(0, 0, 0, .1);
  }

  .navbar {
    padding: .6rem 0;
    font-size: 18px;
  }

  .navbar-brand {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;;
    font-size: 32px;
    color: #42b983;
  }

  .navbar-brand:hover {
    color: #42b983 !important;
  }

  .nav-link {
    color: rgb(0, 0, 0, .5) !important;
    transition: .2s;
  }

  .nav-link:hover {
    color: rgb(0, 0, 0, .9) !important;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .btnSignIn {
    margin-left: 20px;
    color: #42b983;
    border: none;
    transition: all .4s ;
    background-color: transparent;
    outline: none;
  }

  .btnSignIn:hover {
    text-decoration: none;
    border: 1px solid #42b983;
    padding: 6px 13px;
    border-radius: 5px;
  }

</style>
