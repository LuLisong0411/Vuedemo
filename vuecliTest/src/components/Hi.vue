<template>
    <div>
        <h2>Welcome to My Vue.</h2>    
    </div>    
</template>

<script>
export default {
    name:'hi',
    data:function(){
        return {
            msg: 'Welcome to My Vue.'
        }
    }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


