<template>
    <div class="detail">
        <div class="detail-one">
            <img :src="detail.CoverPhoto" alt="" @click="imgs(detail.SerialID)">
        </div>
        <div class="detail-two">
            <p>{{detail.market_attribute && detail.market_attribute.dealer_price}}</p>
            <p>指导价 {{detail.market_attribute && detail.market_attribute.dealer_price}}</p>
            <button @click="lk(list['1.4L/110kW 涡轮增压'||'2.0L/140KW 涡轮增压'||'2.0L/185KW 涡轮增压'][0].car_id)">{{detail.BottomEntranceTitle}}</button>
            <li class="year">
                <span @click="changeYear(item)" v-for="(item, index) in year" :key="index" :class="curType==item?'active':''">{{item}}</span>
            </li>
            <div>
                <ul v-for="(item, index) in list" :key="index">
                    <p>{{index}}</p>
                    <li v-for="(value, key) in item" :key="key">
                        <p>{{value.market_attribute.year+'款 '+value.car_name}}</p>
                        <p>{{`${value.max_power}马力${value.gear_num}档${value.trans_type}`}}</p>
                        <p>
                            <span>{{`指导价${value.market_attribute.dealer_price_min}`}}</span>
                            <span>{{value.market_attribute.official_refer_price}}</span>
                        </p>
                        <button @click="lk(value.car_id)">{{detail.BottomEntranceTitle}}</button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="detail-three"  @click="lk(list['1.4L/110kW 涡轮增压'||'2.0L/140KW 涡轮增压'||'2.0L/185KW 涡轮增压'][0].car_id)">
            <p>询问低价</p>
            <span>本地经销商为您报价</span>
        </div>
    </div>
</template>
<script>
    import {mapState,mapActions,mapGetters,mapMutations} from "vuex"
    export default {
        name:"detail",
        data(){
            return {

            }
        },
        computed:{
            ...mapState({
                detail:state=>state.app.getDetail,
                curType:state=>state.app.curType
            }),
            ...mapGetters({
                year:"app/year",
                list:"app/list"
            })
        },
        methods:{
            ...mapMutations({
                changeYear:"app/changeYear"
            }),
            imgs(id){
                this.$store.dispatch("imgs/getImgs",id);
                this.$router.push({
                    path:"/imgs",
                    query:{id}
                })
            },
            lk(id){
                this.$router.push({
                    path:"/price",
                    query:{id}
                })
            }
        }
    }
</script>
<style scoped>
.detail{
    width:100%;
    height:100%;
    overflow-y: scroll;
    background: #f4f4f4;
}
.detail-two>li{
    width:100%;
    height:.9rem;
    line-height:.7rem;
    font-size:.32rem;
    border-top:.18rem solid #f4f4f4;
    
}
.detail-two>li>span{
    padding-right: .46rem;
}
.detail-one{
    width:100%;
    height:3.3rem;
    position: relative;
}
.detail-one img{
    width:100%;
    top:50%;
    transform: translateY(-50%);
    position:absolute;
}
.detail-two{
    padding:.36rem .2rem .3rem;
    background: #fff;
    position: relative;
}
.detail-two>p:nth-child(1){
    font-size:.36rem;
    color:red;
    margin:0;
}
.detail-two>p:nth-child(2){
    font-size:.26rem;
    color:silver;
}
.detail-two>button{
    position: absolute;
    width:50%;
    padding:.15rem 0;
    background:#00afff;
    right:.1rem;
    top:.4rem;
    color:white;
    border-radius: .1rem;
    outline: none;
    font-size:.3rem;

    border:none;
}
.detail-two div ul>p{
    padding: 0 .2rem;
    height: .5rem;
    line-height: .5rem;
    font-size: .26rem;
    color: #999;
    background: #f4f4f4;
}
.detail-two div ul>li{
        padding: 0 .2rem .2rem 0;
        border-bottom: .18rem solid #f4f4f4;
        overflow: hidden;
}
.detail-two div ul>li p:nth-child(1){
    font-size: .3rem;
    line-height: .5rem;
    margin:0;
    color: #3d3d3d;
}
.detail-two div ul>li p:nth-child(2){
    color: #bdbdbd;
    margin-bottom: 0;
    font-size: .26rem;
}
.detail-two div ul>li p:nth-child(3){
    text-align: right;
    padding-bottom: .1rem;
    font-size: .24rem;
    color: #818181;
    border-bottom: 1px solid #f8f8f8;
}
.detail-two div ul>li p:nth-child(3) span:nth-child(2){
    font-size: .3rem;
    color: #ff2336;
    margin-left: .1rem
}
.detail-two div ul li button{
    border:none;
    outline: none;
    width:100%;
    height:.5rem;
    color:#00afff;
    background:none;
    font-size:.32rem;
}
.detail-two div ul>li:last-child{
    padding:0;
    border-bottom: 0;
}
.detail-three {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left:0;
    bottom:0;
    width:100%;
    height:1rem;
    background:#00afff;
    color:white;
    flex-direction: column;
}
.detail-three p{
    margin:0;
    font-size:.33rem;
}
.active{
    color:skyblue;
}
</style>