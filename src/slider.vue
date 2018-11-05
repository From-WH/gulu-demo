<template>
  <transition name="slide-slide">
    <div class="slider" v-if="visible">
      <slot></slot>
      <button class="button" @click="close">关闭</button>
    </div>
  </transition>
</template>
<script>
  import Bus from './bus'

  export default {
    name: 'GuluSlider',
    data() {
      return {
        visible: true,
      }
    },
    methods: {
      close() {
        this.visible = false
      },
      open() {
        this.visible = true
      }
    },
    mounted() {
      Bus.$on('openSlider', () => {
        this.open()
      })
    }
  }
</script>
<style lang="scss" scoped>
  .slider {
    width: 100px;
    background: #91B7F7;
    position: relative;
  }

  .hasSlider {
    flex-direction: row;
  }

  .button {
    color: white;
    border: none;
    padding: 3px;
    border-radius: 2px;
    background-color: #6196cc;
    position: absolute;
    top: 0;
    right: 0;
  }

  .slide-slide-leave-active {
    transition: transform;
  }

  .slide-slide-enter, .slide-slide-leave-to {
    margin-left: -100px;
    transition: all 0.9s;
    opacity: 0;
  }
</style>