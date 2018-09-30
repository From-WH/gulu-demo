<template>
  <div class="toast" ref="toast" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>

  export default {
    name: 'GuluToast',
    props: {
      position: {
        type: String,
        default: 'top',
        visible: function (value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      },
      autoClose: {
        type: Boolean,
        default: false
      },
      autoCloseDelay: {
        type: Number,
        default: 2
      },
      closeButton: {
        type: Object,
        default() {   //如果是一个对象必须写成这样，
          return {
            text: '需要',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      }

    },
    computed: {
      toastClasses() {
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    mounted() {
      this.upDateStyle()
      this.execAutoClose()

    },
    methods: {
      execAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      upDateStyle() {
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      onClickClose() {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)  //this就是这个toast实例
        }
      },
      close() {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  @keyframes slide-up {
    0%{opacity: 0; transform: translate(-50%,100%) }
    100%{opacity: 1;transform: translate(-50%,0%)}
  }
  @keyframes middle {
    0%{opacity: 0;}
    100%{opacity: 1;}
  }
  @keyframes slide-down {
    0%{opacity: 0; transform: translate(-50%,-100%) }
    100%{opacity: 1;transform: translate(-50%,0%)}
  }
  .toast {
    animation: fade-in 0.5s;
    border: 1px solid black;
    font-size: $font-size;
    min-height: $toast-min-height;
    display: flex;
    align-items: center;
    position: fixed;
    color: white;
    border-radius: 6px;
    background: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    left: 50%;
    z-index: 30;
    .close {
      padding: 0 8px;
      flex-shrink: 0;
    }
    .message {
      padding: 8px 8px;
    }
    .line {
      height: 100%;
      border-left: 1px solid #999;
      margin-left: 8px;
    }
    &.position-top {
      top: 0;
      animation: slide-down .5s;
      transform: translateX(-50%);
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
    &.position-bottom {
      bottom: 0;
      animation: slide-up .5s;
      transform: translateX(-50%);
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    &.position-middle {
      top: 50%;
      animation: middle .5s;
      transform: translateX(-50%);
    }
  }
</style>