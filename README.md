# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

- Volar 官方提供 demo 之一：[vue3-eslint-stylelint-demo (Volar + ESLint + stylelint + husky)](https://github.com/sethidden/vue3-eslint-stylelint-demo)

- [script setup 实现讨论](https://github.com/vuejs/rfcs/pull/227)

# 创建项目

[1. vite 创建](https://www.cnblogs.com/huangchun/p/16661364.html?from_wecom=1)
[2. 搭建第一个 Vite 项目](https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project)

# eslint + prettier + husky + lint-staged + vite + vue3

[eslint + prettier](https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/?from_wecom=1)
[husky + lint-staged + commitlint](https://juejin.cn/post/7115327455707168798?from_wecom=1)
[参考流程](https://www.jianshu.com/p/722ff8888657?from_wecom=1)

# 让 husky 执行.husky 文件夹中的文件

[husky 执行 pre-commit 文件](https://stackoverflow.com/questions/8598639/why-is-my-git-pre-commit-hook-not-executable-by-default?from_wecom=1)
chmod ug+x .husky/_
chmod ug+x .git/hooks/_

# 处理.vue 一直提示，文件名称需要驼峰

https://stackoverflow.com/questions/70346829/eslint-vue-multiword-components?from_wecom=1

# Antd

- [Vite Antd 按需加载](https://www.antdv.com/docs/vue/introduce-cn#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD)

- [Antd 国际化](https://www.antdv.com/docs/vue/i18n-cn#%E5%9B%BD%E9%99%85%E5%8C%96) antd 时间控件使用 dayjs，非 moment

- @ant-design/icons-vue 配置到 vite: AntDesignVueResolver({ resolveIcons})

# vite less 处理 + postcss + 浏览器前缀

- [vite less 处理](https://juejin.cn/post/7060351422885265415)

- 支持 main.js 引入.less 文件
  [css 在 vite 配置，javascriptEnabled 支持 js 引入.less](https://www.jianshu.com/p/4a76d68e16ec)

  记得创建全局样式覆盖一下看看：[less 覆盖全局变量](https://www.cnblogs.com/-roc/p/16212801.html)

  [stylelint less vue3 vite](https://www.swvq.com/article/detail/471)

# github 提交项目使用 Github Token

[Github Token](https://juejin.cn/post/7104215580705554463#heading-1)
