import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/Hi',
      name:'Hi',
      component:Hi ,
      children:[
        {path:'/',component:Hi},
        {path:'hi1',component:hi1},
        {path:'hi2',component:hi2}
      ]
    }
  ]
})
