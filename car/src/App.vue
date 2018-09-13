<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "./css/style.css"
import "./css/bootstrap.min.css"
import "./css/font-awesome.min.css"
import "./css/animate/animate.min.css"
import "./css/bootstrapValidator/bootstrapValidator.min.css"
import "./css/iCheck/all.css"
import "./font/iconfont.css"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style:none;
}
html,body,#app{
  width:100%;
  height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}


</style>
