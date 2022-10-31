import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

import { resolve } from 'path'

import eslintPlugin from 'vite-plugin-eslint'

// console.log('-----:: ', import.meta.url)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      // 按需加载antd & icon
      resolvers: [AntDesignVueResolver({ resolveIcons: true })],
    }),
    eslintPlugin(),
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // https://www.jianshu.com/p/4a76d68e16ec
        // https://www.cnblogs.com/-roc/p/16212801.html
        // modifyVars: {
        //   hack: `true; @import (reference) "${resolve('src/assets/styles/color.less')}";`,
        // },
        javascriptEnabled: true,
      },
    },
  },
})
