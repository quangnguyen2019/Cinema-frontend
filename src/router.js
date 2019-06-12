import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import DetailMovie from "./views/DetailMovie";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import VueSession from 'vue-session';

Vue.use(VueSession)
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/movie/:id",
      component: DetailMovie
    },
    {
      path: "/signIn",
      component: SignIn
    },
    {
      path: '/signUp',
      component: SignUp
    }
  ]
});
