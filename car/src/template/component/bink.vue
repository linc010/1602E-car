<template>
    <div class="pot">
        {{b}}
    </div>
</template>
<script>
    export default {
        name:"bink",
        data(){
            return {

            }
        },
        props:["b"]
    }
</script>
<style>
.pot{
    position: fixed;
    top:-.1rem;
    right:.5rem;
    text-align: center;
    color:white;
    font-size:15px;
    line-height: .5rem;
    width:.5rem;
    height:.5rem;
    border-radius:50%;
    background:rgba(0,0,0,.5);
    z-index: 1000;
}
</style>