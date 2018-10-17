<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>

  export default {
    name: 'GuluLayout',
    data() {
      return {
        layoutClass: {
          hasSlider: false
        },
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'GuluSlider') {
          this.layoutClass.hasSlider = true
        }
      })

    }
  }
</script>
<style lang="scss" scoped>
  .layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 400px;
    overflow: hidden;
    &.hasSlider {
      flex-direction: row;
    }
  }
</style>