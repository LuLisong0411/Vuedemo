<template>
    <div>
        <h2>{{msg}}-{{$route.params.url}}-{{$route.params.id}}</h2>    
    </div>    
</template>

<script>
export default {
    name:'hi',
    data:function(){
        return {
            msg: 'Welcome to Hi2 page.'
        }
    }
}
</script>


