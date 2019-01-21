<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
       <button @click="go">前进</button>
       <button @click="goBack">后退</button>
       <button @click="goHome">返回首页</button>
    </div>
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
       <router-link to ="/no">404</router-link>  |
    </div>
    <p>{{ $route.name }}</p>
      <!-- 过渡效果先出后进 -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <transition name="fade" mode="in-out">过渡效果先进后出
      <router-view></router-view>
    </transition> -->
      <router-view name="left" style="float:left;width:50%;height:500px;background-color:#ff00ff"></router-view>
      <router-view name="right" style="float:right;width:50%;height:500px;background-color:#c0c"></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    go(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/')
    }
  }
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
.fade-enter{
  opacity:0;
}
.fade-enter-active{
  transition:opacity .8s;
}
.fade-leave{
  opacity:1;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .8s;
}
</style>
