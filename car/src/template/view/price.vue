<template>
    <div class="price">
        <header>
            <p>可向多个商家咨询最低价，商家及时回复</p>
        </header>
        <div class="price-one">
            <div>
                <img :src="price.details&&price.details.serial.Picture" alt="">
                <div>
                    <p>{{price.details&&price.details.serial.AliasName}}</p>
                    <p>{{price.details&&price.details.market_attribute.year}}款 {{price.details&&price.details.car_name}}</p>
                </div>
            </div>
            <div class="price-two">
                <h4 class="tip">个人信息</h4>
                <p><span>姓名</span><input type="text" placeholder="输入你的真实中文姓名"></p>
                <p><span>手机</span><input type="text" placeholder="输入你的真实中文号码"></p>
                <p @click="getShow"><span>城市</span><span>{{title}}</span></p>
                <div>
                    <button>询最低价</button>
                </div>
            </div>
            <div class="price-three">
                <h4 class="tip">选择报价经销商</h4>
                <ul>
                    <li v-for="(item,ind) in price.list" :class="bing.indexOf(ind)!==-1?'active':''" @click="lk(ind)" :key="ind">
                        <p><span>{{item.dealerShortName}}</span><span>{{item.promotePrice}}</span></p>
                        <p><span>{{item.address}}</span><span>售{{item.saleRange}}</span></p>
                    </li>
                </ul>
            </div>
        </div>
        <locations :class="isShow?'locations actives':'locations'" :ids="ids">

        </locations>
    </div>
</template>
<script>
    import {mapState} from "vuex"
    import locations from "./locations.vue"
    export default {
        name:"price",
        data(){
            return {
                bing:[],
                ids:this.$route.query.id
            }
        },
        computed:{
            ...mapState({
                price:state=>state.imgs.price,
                isShow:state=>state.locations.isShow,
                title:state=>state.locations.title
            })
        },
        methods:{
            bink(){
                this.$store.dispatch("imgs/getPrice",{carId:this.ids,cityId:201})
            },
            lk(id){
                if(this.bing.indexOf(id)==-1){
                    this.bing.push(id)
                }else{
                    this.bing.splice(this.bing.indexOf(id),1)
                }
            },
            getShow(){
                this.$store.commit("locations/changeShow")
            }
        },
        mounted(){
            this.bink();
        },
        components:{
            locations
        }
    }
</script>
<style>
.price{
    width:100%;
    height:100%;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    overflow-y:hidden;
    justify-content: space-between;
}
.price header{
    height: .6rem;
    line-height: .6rem;
    width: 100%;
    background: #79cd92;
    text-align: center;
    z-index: 99;
}
.price header p{
    color: #fff;
    font-size: .3rem;
    display: inline-block;
}
.price-one{
    -webkit-box-flex: 1;
    margin-top:.6rem;
    flex: 1;
    width: 100%;
    overflow-y:scroll;
    background: #f4f4f4;
    -webkit-overflow-scrolling: touch;
}
.price-one>div:nth-child(1){
    background: #fff;
    padding: .32rem .18rem .24rem;
    position: relative;
    height: 2rem;
    box-sizing: border-box;
}
.price-one>div:nth-child(1):before{
    content: "";
    display: inline-block;
    padding-top: .16rem;
    padding-right: .16rem;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    right: .26rem;
    top: .9rem;
}
.price-one>div:nth-child(1) img{
    width: 2.3rem;
    height: 1.41rem;
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 5px;
}
.price-one>div:nth-child(1) div{
    width: 4.3rem;
    top:.32rem;
    position: absolute;
    right:.4rem;
}
.price-one>div:nth-child(1) div p:nth-child(1){
    font-size:.36rem;
    margin:0;
}
.price-one>div:nth-child(1) div p:nth-child(2){
    margin-top: .16rem;
    font-size: .32rem;
    line-height: 1.2;
    color: #333;
}
.price-two{
    width:100%;
    margin:0;
    padding:0;
    background:white;
}
.tip{
    height: .5rem;
    line-height:.5rem;
    padding:0 .2rem;
    font-size:.24rem;
    color:#666;
    background:#eee;
    font-weight: normal;
    margin:0;
}
.price-two p{
    font-size: .32rem;
    height: .88rem;
    line-height: .88rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    color: #000;
    padding:0 .2rem;
    margin:0;
}
.price-two p input{
    padding-right: .2rem;
    height:.5rem;
    width: 88%;
    text-align: right;
    box-sizing: border-box;
    color: #555;
    outline: none;
    -webkit-appearance: none;
    border:none;
}
.price-two p span:nth-child(2){
    display: inline-block;
    width:88%;
    color:#555;
    text-align: right;
    box-sizing:border-box;
}
.price-two p span:nth-child(2):after{
    content: "";
    display: inline-block;
    padding-top: .16rem;
    padding-right: .16rem;
    border-top: 1px solid silver;
    border-right: 1px solid silver;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
.price-two div {
    background: #fff;
    text-align: center;
    padding-top:.3rem;
    padding-bottom:.28rem;
}
.price-two div button{
    font-size: .32rem;
    color: #fff;
    width: 80%;
    background: #3aacff;
    height: .7rem;
    border-radius: .1rem;
    outline:none;
    border:none;
}

.price-three ul{
    background: #fff;
    padding:0 .18rem;
}
.price-three ul li{
    position: relative;
    padding: .26rem 0 .26rem .54rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    height: 1.65rem;
}
.price-three ul li p:first-child{
    font-size:.3rem;
}
.price-three ul li p:first-child span:last-child{
    font-size:.24rem;
    float:right;
    color:red;
}
.price-three ul li p:last-child{
    font-size:.24rem;
    margin-top:.1rem;
    color:#a2a2a2;
}
.price-three ul li p:last-child span:first-child{
    display: inline-block;
    max-width: 4.6rem;
}
.price-three ul li p:last-child span:last-child{
    float: right;
}
.price-three ul li:before{
    content: "";
    display: inline-block;
    width: .32rem;
    height: .32rem;
    border-radius: 50%;
    border: 2px solid #ccc;
    box-sizing: border-box;
    position: absolute;
    left: .05rem;
    top: 50%;
    -webkit-transform: translate3d(0,-50%,0);
    transform: translate3d(0,-50%,0);
}
.active:before{
    background:#3aacff;
    border: none;
}
.active:after{
    content: "";
    display: inline-block;
    padding-top: .17rem;
    padding-right: .1rem;
    border: 2px solid #fff;
    -webkit-transform: rotate(40deg) translate3d(0,-50%,0);
    transform: rotate(40deg) translate3d(0,-50%,0);
    position: absolute;
    left: .07rem;
    border-left: none;
    border-top: none;
    top: 47%;
}
</style>