<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
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
      },
      closeButton: {
        type: Object,
        default() {   //如果是一个对象必须写成这样，
          return {
            text: '关闭', callback: undefined
          }
        }
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
      onClickClose(){
        this.close()
        if(this.closeButton && typeof this.closeButton.callback === 'function'){
          this.closeButton.callback()
        }
      },
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
    .close {
      padding-left: 16px;
    }
    .line {
      height: 100%;
      border-left: 1px solid #999;
      margin-left: 16px;
    }
  }
</style>