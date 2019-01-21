import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'
import hi3 from '@/components/hi3'
import hi4 from '@/components/hi4'
import hi5 from '@/components/hi5'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  // mode:'hash',
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components:{
        default: HelloWorld,
        left:hi3,
        right:hi4
      }
    },{
      path: '/LuLisong',
      name: 'HelloWorld1',
      components:{
        default: HelloWorld,
        left:hi4,
        right:hi3
      }
    },{
      path:'/Hi',
      component:Hi ,
      children:[
        {path:'/',name:'hi',component:Hi},
        // {path:'hi1',name:'HelloWorld/hi/hi1',component:hi1},
        // {path:'hi2',name:'HelloWorld/hi/hi2',component:hi2},
        {path:'hi1',name:'hi1',component:hi1},
        {path:'hi2',name:'hi2',component:hi2}
      ],
      alias:'/alias'
    },{
      path:'/hi5/:newsId(\\d+)/:newsTitle',//正则表达式将Id转化为数字
      component:hi5,
      //配置文件里写钩子函数
      // beforeEnter:(to,from,next)=>{
      //   console.log(to);
      //   console.log(from);
      //   next();//next相当于开关，实现跳转，里面可以带参数（true,false,对象）
      // }
    },{
      path:'/goHome',
      redirect:'/'
    },{
      path:'/goHi5/:newsId(\\d+)/:newsTitle',
      redirect:'/hi5/:newsId(\\d+)/:newsTitle'
    },{
      path:'hi1',
      component:hi1,
    },{
      path:'*',
      component:Error
    }
  ]
})
