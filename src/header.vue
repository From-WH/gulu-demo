<template>
  <div class="header">
    <slot></slot>
    <button>open</button>
  </div>
</template>
<script>
  export default {
    name:'GuluHeader',
    data(){
      return{

      }
    }

  }
</script>
<style lang="scss" scoped>
  .header{
    height: 100px;
    background-color: #777;
  }
</style>