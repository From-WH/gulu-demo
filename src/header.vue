<template>
  <div class="header">
    <slot></slot>
    <button @click="openClick">打开</button>
  </div>
</template>
<script>
  import Bus from './bus'
  export default {
    name: 'GuluHeader',
    data() {
      return {}
    },
    methods:{
      openClick(){
        Bus.$emit('openSlider')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .header {
    height: 100px;
    background-color: #87CEFA;
  }
</style>