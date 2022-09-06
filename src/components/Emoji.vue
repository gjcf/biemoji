<template>
  <div :style="{ height: (height + 40) + 'px' }" class="tabs">
    <div class="tab-panel">
      <input type="radio" name="tab" :id="id + '-wx'" checked />
      <label class="tab-item" :for="id + '-wx'">微信</label>
      <div class="tab-content">
        <div :style="{ height: height + 'px' }" class="emoji-container">
          <span class="emoji-wrapper" v-for="[key, value] of Object.entries(wxEmojis)" :key="value">
            <img :src="'https://unpkg.com/biemoji@latest/dist/wx/' + value + '.png'" :alt="value" @click="addEmoji(key)">
          </span>
        </div>
        <div class="delete-button" @click="deleteEmoji()" v-if="button">
          <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#666666">
            <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z" />
          </svg>
        </div>
      </div>
    </div>
    <div class="tab-panel">
      <input type="radio" name="tab" :id="id + '-qq'" />
      <label class="tab-item" :for="id + '-qq'">QQ</label>
      <div class="tab-content">
        <div :style="{ height: height + 'px' }" class="emoji-container">
          <span class="emoji-wrapper" v-for="[key, value] of Object.entries(qqEmojis)" :key="value">
            <img :src="'https://unpkg.com/biemoji@latest/dist/qq/' + value + '.gif'" :alt="value" @click="addEmoji(key)">
          </span>
        </div>
        <div class="delete-button" @click="deleteEmoji()" v-if="button">
          <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#666666">
            <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { wxEmojiArray, qqEmojiArray } from '../util'

export default {
  name: 'Emoji',
  props: {
    id: {
      type: String,
      default: 'biemoji'
    },
    value: {
      type: String,
      default: ''
    },
    button: {
      type: Boolean,
      default: true
    },
    height: {
      type: Number,
      default: 160
    }
  },
  data() {
    return {
      wxEmojis: wxEmojiArray,
      qqEmojis: qqEmojiArray,
    }
  },
  methods: {
    addEmoji(key) {
      this.$emit('add', this.value + key)
    },
    deleteEmoji() {
      this.$emit('delete', this.$deleteEmoji(this.value))
    }
  },
}
</script>

<style>
@import "../style.css";
</style>