<template>
  <div>
    <h3>预览:</h3>
    <g-row class="demoRow" gutter="10">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8" offset="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="6" offset="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6" offset="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="8">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
    </g-row>

    <h3>代码:</h3>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>

  import GCol from '../../../src/col'
  import GRow from '../../../src/row'


  export default {
    components: {
      'g-col': GCol,
      'g-row': GRow,
    },
    data() {
      return {
        content: `
<g-row class="demoRow" gutter="10">
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8" offset="8">
    <div class="demoCol">8</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="6" offset="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6" offset="6">
    <div class="demoCol">6</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4" offset="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4" offset="8">
    <div class="demoCol">4</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
</g-row>
`.trim()
      }
    }
  }

</script>
<style>
  * {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
