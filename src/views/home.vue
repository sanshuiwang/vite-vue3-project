<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter() //router是进行路由跳转的
const onGoDetail = () => {
  router.push({
    name: 'detail',
    query: {
      id: '1234567890',
    },
  })
}
const onAdd = () => {
  store.commit('increment', 1)
}
</script>

<template>
  <h1>Hello World!!!</h1>

  <div class="card">
    <button type="button" @click="onAdd">count is {{ store.state.count }}</button>
    <div>{{ store.getters.totalPrice }}元</div>
  </div>

  <div @click="onGoDetail">详情页</div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
