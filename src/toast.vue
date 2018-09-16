<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>

  export default {
    name: 'GuluToast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDely: {
        type: Number,
        default: 2
      }
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDely * 1000)
      }
    },
    methods: {
      close() {
        this.$el.remove()
        this.$destroy()
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    border: 1px solid black;
    font-size: $font-size;
    height: $toast-height;
    display: flex;
    align-items: center;
    padding: 0 16px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    border-radius: 6px;
    background: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
  }
</style>