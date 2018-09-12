<template>
  <transition name="slide-slide">
  <div class="sider" v-if="visible">
    <slot></slot>
    <button @click="visible = false">X</button>
  </div>
  </transition>
</template>
<script>
  export default {
    name:'GuluSider',
    data(){
      return{
        visible:true,
      }
    },
  }
</script>
<style lang="scss" scoped>
  .sider{
    width: 100px;
    background: #333;
    position: relative;
  }
  .hasSider{
    flex-direction: row;
  }
  button{
    position: absolute;
    top: 0;
    right: 0;
  }
  .slide-slide-leave-active {
    transition: transform;
  }
  .slide-slide-enter, .slide-slide-leave-to{
    margin-left: -100px;
    transition: all 0.6s;
  }
</style>