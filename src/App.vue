<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.comp'

export default {
  components: {
    Navbar
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
