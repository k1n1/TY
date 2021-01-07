import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Vuex from "vuex"
import store from "./store";
import "./axios"
import routes from "./Routes";

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  mode : 'history',
  routes
})



new Vue({
  store,
  render: h => h(App),
  router: router,
}).$mount('#app')
