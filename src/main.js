import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App), //渲染   h形参
  /*render:function (createElement) {
    //createElement是一个用来根据组件创建对应的标签的函数
    return createElement(app)
  }*/
}).$mount('#app')
