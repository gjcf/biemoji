import Emoji from "./components/Emoji.vue"
import { string2emoji, deleteEmoji } from "./util"

export default {
  install: (app, options) => {
    // const url = options && options.url
    app.component("Emoji", {
      mixins: [Emoji], created: function () {
        // this.url = url
      }
    })
    app.config.globalProperties.$string2emoji = string2emoji
    app.config.globalProperties.$deleteEmoji = deleteEmoji
  }
}