<template>
    <!-- <div>
        <h2>{{msg}}</h2>
        <h2>{{$store.state.count}}-{{count}}</h2>
        <p>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </p>
    </div> -->
    <!-- 简写上述方式以及改变mutations的用法(传参) -->
    <div>
        <h2>{{msg}}</h2>
        <h2>{{count}}</h2>
        <p>
            <button @click="$store.commit('add',10)">+</button>
            <button @click="reduce">-</button>
        </p>
    </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState , mapMutations, mapGetters} from 'vuex'
export default {
    data() {
        return {
            msg:'Hello Vuex'
        }
    },
    store,
    //state的几种写法
//    computed: {
//        count(){
//            return this.$store.state.count;
//        }
//    }
     //es6箭头函数
    // computed:mapState({
    //     count:state=>state.count
    // })
    //es5的原生写法
    // computed:mapState({
    //     count:function(state){
    //         return state.count
    //     }
    // }),
    //实际开发中使用的数组方式
    // computed: mapState(['count']),
    //...es6扩展运算符
    computed:{
        ...mapState(['count']),
        // count:function(){
        //     return this.$store.getters.count;
        // }
        //上一种方式的简写
        ...mapGetters(['count'])

    },
    methods: mapMutations(['add','reduce'])
}
</script>