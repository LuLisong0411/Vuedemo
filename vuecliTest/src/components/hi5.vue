<template>
    <div>
        <h2>{{msg}}</h2>
        <p>newsId:{{$route.params.newsId}}</p>
        <p>newsTitle:{{$route.params.newsTitle}}</p>
    </div>
    
</template>
<script>
export default {
    name:'hi5',
    data:function(){
        return{
            msg:'I am hi5 page.'
        }
    },
    beforeRouteEnter:(to, from, next) => {
        console.log('准备进入Hi5 page');
        next();
    },
    beforeRouteLeave (to, from, next) {
        console.log('准备离开Hi5 page');
        next();
    }
}
</script>
<style scoped>

</style>
