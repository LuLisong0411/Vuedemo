<template>
    <div>
        <h2>{{msg}}</h2>
        <p>newsId:{{$route.hi5.newsId}}</p>
        <p>newsTitle:{{$route.hi5.newsTitle}}</p>
    </div>
    
</template>
<script>
export default {
    name:'hi5',
    data:function(){
        return{
            msg:'I am hi5 page.'
        }
    }
}
</script>
<style scoped>

</style>
