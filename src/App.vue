<template>
  <div id="app">
    <CinemaNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import CinemaNavbar from '@/components/CinemaNavbar.comp'

export default {
  components: {
    CinemaNavbar
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
 
</style>
