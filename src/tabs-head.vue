<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (item, vm) => {
        let {width, height, top, left} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left - 590}px`
      })
    },
  }
</script>
<style lang="scss" scoped>
  $tab-height: 40px;
  $border-color:#999;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid blue;
      transition: all .5s;
    }
    > &.actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      padding: 0 2em;
    }
  }
</style>