<script setup>
import { useRoute } from 'vue-router'

const route = useRoute() //route是获取路由信息的
</script>

<template>详情页id: {{ route.query.id }}</template>

<style scoped></style>
