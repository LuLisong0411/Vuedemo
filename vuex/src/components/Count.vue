<template>
    <div>
        <h2>{{msg}}</h2>
        <h2>{{$store.state.count}}</h2>
        <p>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </p>
    </div>
    
</template>

<script>
import store from '@/vuex/store';
export default {
    data() {
        return {
            msg:'Hello Vuex'
        }
    },
    store
}
</script>