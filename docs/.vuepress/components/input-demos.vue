<template>
  <div>
    <div class="box" style="margin-bottom: 20px;">
      <g-input value="张三"></g-input>
      <g-input value="张三" disabled></g-input>
      <g-input value="张三" readonly></g-input>
    </div>
    <div class="box">
      <g-input value="张二" error="姓名不能小于两个字"></g-input>
    </div>
    <br>

    <div class="box">
      <h3>双向绑定</h3>
      <g-input v-model="value"></g-input>
      <div>
        value: {{value}}
      </div>
    </div>
    <h3>代码:</h3>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Input from '../../../src/input'
  import Icon from '../../../src/icon'



  export default {
    components: {
      'g-icon': Icon,
      'g-input': Input
    },

    data() {
      return {
        value: '1',
        content: `
    <div class="box" style="margin-bottom: 20px;">
      <g-input value="张三"></g-input>
      <g-input value="张三" disabled></g-input>
      <g-input value="张三" readonly></g-input>
    </div>
    <div class="box">
      <g-input value="张二" error="姓名不能小于两个字"></g-input>
    </div>
    <div class="box">
      <g-input value="张四" @change="inputChange"></g-input>
    </div>
`.trim()
      }
    }
  }

</script>
