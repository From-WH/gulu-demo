<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'GuluButtonGroup',
    mounted() {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase();
        if (name !== 'vm') {
          console.warn(`g-button-group的子元素只能是g-button,但您输入的是${name}`)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $border-radius: 4px;

  .g-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .g-button {
      border-radius: 0;
      &:not(:first-child){
        margin-left: -1px;
      }
      &:first-child {
        border-bottom-left-radius: $border-radius;
        border-top-left-radius: $border-radius;
      }
      &:last-child {
        border-bottom-right-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
      &:hover {
        z-index: 1;
      }
    }
  }
</style>