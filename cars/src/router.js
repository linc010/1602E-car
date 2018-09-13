import VueRouter from "vue-router"
import Vue from "vue"

//登录页
const login = ()=>import("./template/login");
const home = ()=>import("./template/home");
const detail = () =>import("./template/view/detail")
const binks = () =>import("./template/view/imgs")
const colors = () =>import("./template/view/colors")
const price = () =>import("./template/view/price")
Vue.use(VueRouter);
const router=new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/login"
        },
        {
            path:"/login",
            name:"login",
            component:login
        },
        {
            path:"/home",
            name:"home",
            component:home
        },
        {
            path:"/detail",
            name:"detail",
            component:detail
        },
        {
            path:"/imgs",
            name:"img",
            component:binks
        },
        {
            path:"/colors",
            name:"colors",
            component:colors
        },
        {
            path:"/price",
            name:"price",
            component:price
        }
    ]
})

router.beforeEach((to,from,next)=>{
    let togo=window.sessionStorage.getItem("login")
    if(togo||to.name==="login"){
        next();
    }else{
        next("/login")
    }
})

export default router