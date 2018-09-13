<template>
    <div class="imgs">
        <div class="imgs-one">
            <router-link to="/colors" tag="span">颜色 <i class="iconfont icon-xiangxia"></i></router-link>
            <span>车款 <i class="iconfont icon-xiangxia"></i></span>
        </div>
        <div class="imgs-two">
            <ul v-for="(item,ind) in imgs">
                <li v-for="(items,ind) in item.List">
                    <img :src="items.Url" alt="">
                </li>
                <div>
                    <p>{{item.Name}}</p>
                    <span>{{item.Count}}张<i class="iconfont icon-angle-right"></i></span>
                </div>
            </ul>
            <!-- {{imgs}} -->
        </div>
    </div>
</template>
<script>
    import {mapState,mapMutations} from "vuex"
    export default {
        name:"imgs",
        data(){
            return {
                
            }
        },
        computed:{
            ...mapState({
                imgs:state=>state.imgs.imgs,
                SerialID:state=>state.app.SerialID
            })
        },
        methods:{
            getColor(){
                this.$store.dispatch("getColor")
            }
        }
    }
</script>
<style scoped>
.imgs{
    width:100%;
    height:100%;
    background: #f4f4f4;
}
.imgs-one{
    width:100%;
    height:.8rem;
    display:flex;
    justify-content: center;
    align-items: center;
    background:white;
}
.imgs-one span{
    flex:1;
    text-align:center;
}
.imgs-one span:nth-child(1){
    border-right:1px solid #ccc;
}
.imgs-one span i{
    color:#ccc;
}
.imgs-two{
    width:100%;
    height:100%;
    margin-top:.2rem;
    overflow-y:scroll;
    overflow-x:hidden;
    padding-bottom:1.23rem;
}
.imgs-two ul {
    width:100%;
    height:auto;
    display:flex;
    flex-wrap: wrap;
    margin:0;
    position:relative;
}
.imgs-two ul li{
    width:2.46rem;
    height:2.46rem;
    position: relative;
    float:left;
    margin-right:.06rem;
    overflow: hidden;
    margin-bottom:.06rem;
    padding:0;
}
.imgs-two ul li:nth-child(3n+3){
    margin-right: 0;
}
.imgs-two ul li img{
    /* width:100%; */
    height:100%;
    background-size:cover;
}
.imgs-two ul div{
    position: absolute;
    width:33.3%;
    height:2.46rem;
    background:rgba(56,90,130,.5);
    left:0;
    top:0;
    display: flex;
    z-index: 100;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    color:white;
}
.imgs-two ul div p{
    margin:0;
}
</style>