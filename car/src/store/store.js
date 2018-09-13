import Vue from "vue"
import Vuex from "vuex"
import imgs from "./modules/imgs.js"
import app from "./app.js"
import locations from "./modules/locations.js"
import logger from "vuex/dist/logger"
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        app,
        imgs,
        locations
    },
    plugins:[logger()]
})