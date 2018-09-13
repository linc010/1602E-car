<template>
    <div class="mink">
            <div v-for="(item,ind) in data">
                <h1 :id="item.title">{{item.title}}</h1>
                <ul>
                    <li v-for="(items,inds) in item.list" @click="makList(items.MasterID)">
                        <img v-lazy="items.CoverPhoto" alt="">
                        <span>{{items.Name}}</span>
                    </li>
                </ul>
            </div>
        <Navt :height="height" :marginTop="marginTop" v-on:tops="tops"></Navt>
        <Mk></Mk>
    </div>
</template>
<script>
import Navt from "./component/navt.vue"
import Mk from "./component/mk.vue"
import {mapState,mapGetters,mapActions} from "vuex"
export default {
    name:"home",
    data(){
        return {
            height:"",
            marginTop:"",
            flagList:false
        }
    },
    components:{
        Navt,Mk
    },
    computed:{
        ...mapState({
            data:state=>state.app.data
        }),
        
    },
    methods:{
        tops(i){
            document.querySelector(".mink").scrollTop=i
        },
        makList(inf){
            this.$store.dispatch("app/makList",inf);
        }
    },
    mounted(){
        this.$store.dispatch("app/fun");
        this.height=0.4*window.innerWidth/750*100;
        this.marginTop=(window.innerHeight-(this.data.length)*this.height)/2;
    },
    updated(){
        this.height=0.4*window.innerWidth/750*100;
        this.marginTop=(window.innerHeight-(this.data.length)*this.height)/2;
       // console.log((window.innerHeight-(this.data.length)*this.height)/2)
    }
}
</script>
<style>

.mink{
    width:100%;
    height: 100%;
    overflow-y:scroll;
}
.mink h1{
    width:100%;
    height:30px;
    background: #f1f1f1;
    line-height:30px;
    color:#999;
    padding:0;
    margin:0;
    font-size:20px;
    text-indent:10px;
}
.mink ul {
    width:100%;
    height:auto;
    padding:0 .2rem;
    box-sizing:border-box;
}
.mink ul li{
    width:100%;
    height:1rem;
    display: flex;
    line-height:1rem;
    border-bottom: 2px solid #ccc;
}
.mink ul li img{
    width:.8rem;
    height:.8rem;
    margin:.1rem;
}
.nav{
    position: fixed;
    width:30px;
    height:auto;
    top:50%;
    transform:translate3d(0,-50%,0);
    z-index: 100;
    right:0;
    text-align: center;
}

</style>