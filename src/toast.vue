<template>
  <div class="toast">
  </div>
</template>
<script>
  import Vue from 'vue'
  Vue.prototype.$toast = function () {
    console.log('我是toast');
  }
  export default {
    name:'GuluToast'
  }
</script>
<style lang="scss" scoped>
  .toast{}
</style>