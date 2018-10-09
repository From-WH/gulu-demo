<template>
  <div>
    <h3>预览:</h3>
    <g-button>默认按钮</g-button>
    <g-button icon="setting">带有icon</g-button>
    <g-button :loading="true">带有loading</g-button>
    <g-button disabled class="disabled">不可点击</g-button>
    <br>
    <br>
    <g-button-group icon="left">
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon-position="right" icon="right">下一页</g-button>
    </g-button-group>
    <h3>代码:</h3>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  import Icon from '../../../src/icon'
  import ButtonGroup from '../../../src/button-group'

  export default {
    components: {
      'g-button': Button,
      'g-icon':Icon,
      'g-button-group':ButtonGroup
    },
    data() {
      return {
        content: `
<g-button>默认按钮</g-button>
<g-button icon="setting">带有icon</g-button>
<g-button :loading="true">带有loading</g-button>
<g-button disabled>不可点击</g-button>

<g-button-group icon="left">
  <g-button icon="left">上一页</g-button>
  <g-button>更多</g-button>
  <g-button icon-position="right" icon="right">下一页</g-button>
</g-button-group>
        `.trim()
      }
    }
  }
</script>
<style>
  .disabled {
    cursor: not-allowed;
  }
</style>