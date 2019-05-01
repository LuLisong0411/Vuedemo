import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    count:1
}

const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}

const getters={
    count:function(){
        return state.count+=50;
    }
}

const actions={
    addAction(context){
        context.commit('add',30);
        setTimeout(()=>{context.commit('reduce')},2000);
        console.log('我比reduce先执行')
    },
    reduceAction( {commit} ){
        commit('reduce');
    }
}
export default new Vuex.Store({
    state,mutations,getters,actions
})