<template>
    <div>
        <div class="nav" @touchstart="mink" @touchmove="link" @touchend="sink">
            <li v-for="(item,ind) in data" :class="item.title">{{item.title}}</li>
            <bink :b="min" v-if="flag" ></bink>
        </div>
    </div>
</template>
<script>
    import { mapState, mapMutations } from "vuex"
    import bink from "./bink.vue"
    export default {
        name: "navt",
        data() {
            return {
                min: "",
                flag: false,
            }
        },
        props: ["height", "marginTop"],
        computed: {
            ...mapState({
                data: state => state.app.data
            })
        },
        components: {
            bink
        },
        methods: {
            mink(e) {
                let page = e.touches[0].pageY;
                let min = Math.floor((page - this.marginTop / 2) / this.height);
                if (min < 0) {
                    min = 0;
                } else if (min > this.data.length - 1) {
                    min = this.data.length - 1;
                }

                let ele = document.getElementById(this.data[min].title);
                this.flag = true;
                this.min = ele.innerText;
            },
            sink() {
                this.flag=false
            },
            link(e) {
                let page = e.touches[0].pageY;
                let min = Math.floor((page - this.marginTop) / this.height);
                if (min < 0) {
                    min = 0;
                } else if (min > this.data.length - 1) {
                    min = this.data.length - 1;
                }

                let ele = document.getElementById(this.data[min].title);
                let ele2 = document.getElementsByClassName(this.data[min].title)[0];
                let top = ele.offsetTop;
                let top2=ele2.offsetTop;
                this.flag = true;
                this.min=ele.innerText;
                document.getElementsByClassName("pot")[0].style.top=top2-5+"px";
                this.$emit("tops", top)
            },
        }
    }
</script>
<style>
</style>