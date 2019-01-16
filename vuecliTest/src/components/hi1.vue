<template>
    <div>
        <h2>{{msg}}-{{ $route.name }}-{{$route.params.userName}}-{{$route.params.id}}</h2>    
    </div>    
</template>

<script>
export default {
    name:'hi',
    data:function(){
        return {
            msg: 'Welcome to Hi1 page.'
        }
    }
}
</script>


