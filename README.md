# 别墨迹 - biemoji

### 特别说明：

- 基于 Vue3 编写，Vue2 不适用。
- 本项目**仅可以用于学习用途**，一切用于不正当的行为，后果由使用者承担责任，与本项目无关。

## 安装

npm
```
npm i biemoji
```
yarn
```
yarn add biemoji
```

## 引入

Vue3
``` javascript
// 引入安装包和样式
import { createApp } from 'vue'
import App from './App.vue'
import Emoji from 'biemoji'
import 'biemoji/dist/style.css'

const app = createApp(App)
app.use(Emoji)
``` 

Nuxt3
在 plugins 下新建 emoji.ts 文件
``` javascript
import { defineNuxtPlugin } from '#app'
import Emoji from 'biemoji'
import 'biemoji/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Emoji)
})
```

## 示例

``` html
<template>
  <div class="app">
    <header>
      <h1>biemoji</h1>
      <h4>快来体验别墨迹</h4>
      <span>
        <a href="https://www.npmjs.com/package/biemoji">使用文档</a>
        &nbsp;&nbsp;
        <a href="https://github.com/newbill/biemoji">仓库地址</a>
      </span>
    </header>
    <Emoji v-model="state.value" @add="addEmoji($event)" @delete="deleteEmoji()" />
    <footer>
      <div class="flex-box">
        <div class="box">{{ state.value }}</div>
        <button @click="send()" class="btn">渲染</button>
        <div class="box">
          <div v-for="(msg, index) of state.msgs" :key="index" v-html="msg"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { reactive, getCurrentInstance } from 'vue'
const internalInstance = getCurrentInstance()
const global = internalInstance?.appContext.config.globalProperties

const state = reactive({
  value: '',
  msgs: [],
})

const send = () => {
  state.msgs.push(global.$string2emoji(state.value))
  state.value = ''
}
const addEmoji = (val) => {
  state.value += val
}
const deleteEmoji = () => {
  if (state.value) {
    state.value = global.$deleteEmoji(state.value)
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #666;
}
a:hover {
  color: green;
}
.app {
  max-width: 870px;
  margin: auto;
}
header,
footer {
  text-align: center;
}
header {
  margin: 50px 0;
}
footer {
  margin-top: 50px;
}
.flex-box {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.btn {
  width: 10%;
  display: inline-block;
  cursor: pointer;
}
.box {
  flex-grow: 1;
  text-align: left;
  max-width: 45%;
  height: 200px;
  border: 1px green solid;
  display: inline-block;
  overflow: auto;
}
</style>
```

**参数说明**
- `id`: 表情面板的唯一标识，可省略，字符串类型，默认为biemoji
- `v-model`: 关联插入表情的内容字段
- `addEmoji($event)`: 点击表情触发的方法，返回参数是该表情的文本形式
- `deleteEmoji()`: 点击删除按钮触发的方法
- `buttton`: 是否显示删除按钮，可省略，布尔类型，默认为true
- `height`: 面板高度，可省略，整数类型，默认为160

**全局方法**

``` javascript
// 解析显示表情
this.value = this.$string2emoji(this.value)
// 逐个删除已有表情
this.value = this.$deleteEmoji(this.value)
```

## 效果

[demo](https://biemoji.vercel.app)

## 未来计划

加入更多表情