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
      component:Hi ,
      children:[
        {path:'/',name:'hi',component:Hi},
        // {path:'hi1',name:'HelloWorld/hi/hi1',component:hi1},
        // {path:'hi2',name:'HelloWorld/hi/hi2',component:hi2},
        {path:'hi1',name:'hi1',component:hi1},
        {path:'hi2',name:'hi2',component:hi2}
      ]
    }
  ]
})
