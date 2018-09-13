<template>
    <div class="colors">
        <p>全部颜色</p>
        <div>
            <p>
                <span v-for="(item,ind) in arr">{{ind}}</span>
            </p>
        </div>
        {{arr}}
    </div>
</template>
<script>
    import {mapState,mapActions} from "vuex"
    export default {
        name:"colors",
        data(){
            return {

            }
        },
        computed:{
            ...mapState({
                SerialID:state=>state.app.SerialID,
                arr:state=>state.imgs.arr
            })
        },
        methods:{
            bink(){
                this.$store.dispatch("imgs/getColor",this.SerialID)
            }
        },
        mounted(){
            this.bink()
        }
    }
</script>
<style >
.colors{
    width:100%;
    height:100%;
    background: #f4f4f4;
    position: absolute;
    top:0;
}
.colors>p{
    width:100%;
    height: .8rem;
    font-size:.34rem;
    background:white;
    line-height:.8rem;
    font-weight:normal;
    color:#00afff;
    margin:.15rem 0;
    text-align: center;
}
</style>