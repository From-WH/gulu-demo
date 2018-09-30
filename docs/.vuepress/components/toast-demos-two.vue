<template>
  <div>
    <g-button @click="onClickButton">上方弹出</g-button>
    <h3>代码:</h3>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import plugin from '../../../src/plugin'
  import GButton from '../../../src/button'
  import Vue from 'vue'

  Vue.use(plugin);

  export default {
    components: {
      'g-button': GButton,
    },
    methods: {
      onClickButton() {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          closeButton: {
            text: '知道了',
            callback: () => {
              console.log('他说知道了')
            }
          },
          enableHtml: true
        })
      }
    },
    data() {
      return {
        content: `
<g-button  @click="onClickButton">上方弹出</g-button>

methods: {
  onClickButton () {
    this.$toast('<strong style="color:red;">加粗的提示</strong>', {
      closeButton: {
        text: '知道了',
        callback: () => {
          console.log('他说知道了')
        }
      },
      enableHtml: true
    })
  }
},
`.trim()
      }
    }
  }

</script>
<style>

</style>
