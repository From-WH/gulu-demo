<template>
  <div>
    <h3>点击弹出内容</h3>
    <h3>预览:</h3>
    <g-popover>
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <h3>代码:</h3>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Popover from '../../../src/popover'
  import Button from '../../../src/button'

  export default {
    components: {
      'g-popover': Popover,
      'g-button':Button,
    },
    data() {
      return {
        content: `
<g-popover>
  <g-button>上方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="bottom">
  <g-button>下方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="left">
  <g-button>左边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="right">
  <g-button>右边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
        `.trim()
      }
    }
  }
</script>
<style>


</style>