<template>
  <div id="app">
    <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light">
            <span class="navbar-brand">Navbar</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <router-link to="/" class="nav-link">Home</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                </ul>

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                
                <router-link to="/signIn" class="btnSignIn" v-if="!this.$session.exists()">Sign In</router-link>
                <button class="btn btn-outline-success ml-3" @click='SignOut' v-else>Sign Out</button>
            </div>
        </nav>
    </div>

    <router-view />

    <!-- <div class="footer">
      <footer class="page-footer font-small special-color-dark pt-4">
        <div class="container">
          <ul class="list-unstyled list-inline text-center">
            <li class="list-inline-item">
              <a class="btn-floating btn-fb mx-1">
                <i class="fab fa-facebook-f"> </i>
              </a>
            </li>

            <li class="list-inline-item">
              <a class="btn-floating btn-tw mx-1">
                <i class="fab fa-twitter"> </i>
              </a>
            </li>

            <li class="list-inline-item">
              <a class="btn-floating btn-gplus mx-1">
                <i class="fab fa-google-plus-g"> </i>
              </a>
            </li>

            <li class="list-inline-item">
              <a class="btn-floating btn-li mx-1">
                <i class="fab fa-linkedin-in"> </i>
              </a>
            </li>

            <li class="list-inline-item">
              <a class="btn-floating btn-dribbble mx-1">
                <i class="fab fa-dribbble"> </i>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-copyright text-center py-3">© 2019 Copyright: Cinema </div>
      </footer>
    </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    SignOut() {
      this.$session.destroy();
      location.reload();
    }
  }
}
</script>


<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar {
  margin: 0 5rem;
}

.nav-link a {
  color: #2c3e50;
}

.btnSignIn {
  margin-left: 20px;
  color: #42b983;
  border: none;
  transition: all .4s ;
}

.btnSignIn:hover {
  text-decoration: none;
  border: 1px solid #42b983;
  padding: 6px 13px;
  border-radius: 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
