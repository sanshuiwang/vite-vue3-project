<script setup>
// 国际化
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
const localLanguage = zhCN
</script>

<template>
  <a-config-provider :locale="localLanguage">
    <router-view />
  </a-config-provider>
</template>

<style lang="less" scoped></style>
