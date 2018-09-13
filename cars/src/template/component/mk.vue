<template>
    <div :class="isSelect?'mask mk':'mk'" @touchstart="start"
                    @touchmove="move"
                    @touchend="end"
                    ref="box">
            <div v-for="(item,ind) in mk">
                <h4>{{item.GroupName}}</h4>
                <dl v-for="(items,inds) in item.GroupList" @click="lk(items.SerialID)">
                    <dt>
                        <img v-lazy="items.Picture" alt="">
                    </dt>
                    <dd>
                        <h4>{{items.AliasName}}</h4>
                        <span>{{items.DealerPrice}}</span>
                    </dd>
                </dl>
            </div>
    </div>
</template>
<script>
    import {mapState} from "vuex"
    export default {
        name:"mk",
        data(){
            return {
                page1:"",
                page2:"",
                offsetLeftX:""
            }
        },
        computed:{
            ...mapState({
                mk:state=>state.app.makList,
                isSelect:state=>state.app.isSelect
            })
        },
        methods:{
            start(e){
                this.page1=e.touches[0].pageX
            },
            move(e){
                this.offsetLeftX=e.touches[0].pageX-this.page1;
                this.$refs.box.style = `transform:translate3d(${this.offsetLeftX}px, 0, 0)`;
            },
            end(e){
                this.$refs.box.style = ``;
                if (this.offsetLeftX > 100){
                    this.$store.commit("app/changeFlag");
                }
            },
            lk(id){
                this.$router.push({
                    path:"/detail"
                }),
                this.$store.dispatch("app/getDetail",id)
            }
        }
    }
</script>
<style>
.mk{
    background:white;
    position: fixed;
    top:0;
    width:70%;
    right:0;
    height:100%;
    overflow-y:scroll;
    transform: translate3d(100%, 0, 0);
    transition:all 1s linear;
    z-index: 1111;
}
.mk>h4{
    width:100%;
    height:.8rem;
    line-height:.8rem;
    background:#ccc;
    text-indent: 1rem;
}
.mk div dl{
    width:100%;
    height:1.5rem;
    border-bottom:2px solid #ccc;
    display:flex;
    box-sizing: border-box;
    margin-bottom: 0;
}
.mk div dl dt{
    flex:1;
}
.mk div dl dt img{
    width:100%;
    height:100%;
    padding:.2rem;
    box-sizing: border-box;
}
.mk div dl dd{
    flex:3;
}
.mk div dl dd span{
    color:red;
}
.mk.mask{
    transform:translate3d(0,0,0);
    transition:all 1s linear;
}
</style>