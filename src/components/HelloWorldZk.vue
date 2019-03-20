<template>
  <div>

    <h1>{{ kaival }}</h1>

  </div>
</template>

<script>
// export  default {
//   data(){
//     return{
//       msg:'来自哪的你NB'
//     }
//   }
// }
//将组件映射成标签供别人使用
export default { //默认暴露
  name: 'HelloWorldZk',
  data(){
      return {
        kaival:'凯凯来了哦'
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
