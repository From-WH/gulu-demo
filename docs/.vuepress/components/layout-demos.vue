<template>
  <div>
    <g-layout>
      <g-slider>slider</g-slider>
      <g-layout>
        <g-header>header</g-header>
        <g-content>content</g-content>
        <g-footer>footer</g-footer>
      </g-layout>
    </g-layout>

    <h3>代码:</h3>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>

  import Layout from '../../../src/layout'
  import Footer from '../../../src/footer'
  import Header from '../../../src/header'
  import Content from '../../../src/content'
  import Slider from '../../../src/slider'


  export default {
    components: {
      'g-layout': Layout,
      'g-header': Header,
      'g-footer': Footer,
      'g-slider': Slider,
      'g-content': Content,
    },
    data() {
      return {
        content: `
<g-layout>
  <g-slider>slider</g-slider>
  <g-layout>
    <g-header>header</g-header>
    <g-content>content</g-content>
    <g-footer>footer</g-footer>
  </g-layout>
</g-layout>

`.trim()
      }
    }
  }

</script>
