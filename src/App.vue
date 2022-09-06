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