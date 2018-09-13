import Vue from "vue"
import VueLazyload from "vue-lazyload"
export default Vue.use(VueLazyload,{
    preLoad: 1.3,
    error: './src/assets/logo.png',
    loading: './src/assets/logo.png',
    attempt: 1,
    throttleWait:300,
})