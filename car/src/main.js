import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"
import store from "./store/store.js"
import Mint from "mint-ui"
import Vuelazyload from "./util/VueLazyload"
import "mint-ui/lib/style.css"
Vue.use(Mint)
new Vue({
  el: '#app',
  router,
  store,
  Vuelazyload,
  render: h => h(App)
})
