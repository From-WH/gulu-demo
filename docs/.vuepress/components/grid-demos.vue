<template>
  <div>
    <g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    <h3>代码:</h3>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>

  import Tabs from '../../../src/Tabs'
  import TabsBody from '../../../src/tabs-body'
  import TabsHead from '../../../src/tabs-head'
  import TabsItem from '../../../src/tabs-item'
  import TabsPane from '../../../src/tabs-pane'


  export default {
    components: {
      'g-tabs': Tabs,
      'g-tabs-body': TabsBody,
      'g-tabs-head': TabsHead,
      'g-tabs-item': TabsItem,
      'g-tabs-pane': TabsPane,
    },
    data() {
      return {
        selected: '1',
        content: `
<g-tabs :selected="selected">
  <g-tabs-head>
    <g-tabs-item name="1">1</g-tabs-item>
    <g-tabs-item name="2">2</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">content 1</g-tabs-pane>
    <g-tabs-pane name="2">content 2</g-tabs-pane>
  </g-tabs-body>
</g-tabs>

data(){
  return{
    selected: '1',
}
`.trim()
      }
    }
  }

</script>
