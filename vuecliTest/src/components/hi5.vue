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
    }
}
</script>
<style scoped>

</style>
