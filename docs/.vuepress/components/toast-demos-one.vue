<template>
  <div>
    <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
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
      'g-button':GButton,
    },
    data() {
      return {
        content: `
<g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>

import plugin from '../../../src/plugin'
import GButton from '../../../src/button'
import Vue from 'vue'
Vue.use(plugin);

export default {
  components: {
    'g-button':GButton,
  },
}
`.trim()
      }
    }
  }

</script>
<style>

</style>
