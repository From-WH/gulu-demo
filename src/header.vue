<template>
  <div class="header">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluHeader',
    data() {
      return {}
    },
    methods:{
      // open(){
      //   this.$on('visiable')
      // }
    }
  }
</script>
<style lang="scss" scoped>
  .header {
    height: 100px;
    background-color: #87CEFA;
  }
</style>