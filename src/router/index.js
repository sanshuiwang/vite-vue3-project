// 路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeApp.vue'
import Detail from '../views/DetailApp.vue'

//定义一些路由
//每个路由需要定义一个组件，
// name要驼峰：https://eslint.vuejs.org/rules/multi-word-component-names.html
// 去掉name驼峰检测：https://stackoverflow.com/questions/70346829/eslint-vue-multiword-components
const routes = [
  { path: '/', component: Home, name: 'HomeApp' },
  { path: '/detail', component: Detail, name: 'DetailApp' },
]

//穿件路由实例并传递“routes”配置
//可以在这里输入更多的配置
const router = createRouter({
  //内部提供了history模式的实现，为了简单起见，我们这里使用hash模式
  history: createWebHashHistory(),
  routes, //`routes:routes`的缩写
})

export default router
