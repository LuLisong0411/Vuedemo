<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
       <router-link to ="/">首页</router-link> | 
       <router-link to ="/hi">Hi页面</router-link>  |
       <!-- <router-link to ="/hi/hi1">Hi1页面</router-link>  | -->
       <!-- <router-link to ="/hi/hi2">Hi2页面</router-link>  | -->
       <router-link :to ="{name:'hi1',params:{userName:'LuLisong',id:'19970508'}}">Hi1页面</router-link>  |
       <router-link :to ="{name:'hi2',params:{url:'https://github.com/LuLisong0411',id:'951170572'}}">Hi2页面</router-link>  |
       <router-link to ="/">Hi3页面</router-link>  |
       <router-link to ="/">Hi4页面</router-link>  |
       <router-link to ="/hi5/100/To best">Hi5页面</router-link>  |
       <router-link to ="/goHome">返回首页</router-link>  |
       <router-link to ="/goHi5/101/I love vue.js">返回hi5</router-link>  |
       <router-link to ="/alias">alias</router-link>  |
    </div>
    <p>{{ $route.name }}</p>
    <router-view></router-view>
    <router-view name="left" style="float:left;width:50%;height:500px;background-color:#ff00ff"></router-view>
    <router-view name="right" style="float:right;width:50%;height:500px;background-color:#c0c"></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
