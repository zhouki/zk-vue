<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <img src="./assets/1552032550(1).jpg" alt="我是周凯哦" height="409" width="409"/>
    <HelloWorldZks></HelloWorldZks>
  </div>
</template>

<script>
import HelloWorldZks from './components/HelloWorldZk.vue'
export default {
  name: 'app',
  components: {   //将组件映射成标签来使用
    HelloWorldZks
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
