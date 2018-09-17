<template>
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="!inableHtml"></slot>
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
      },
      inableHtml: {
        type: Boolean,
        default: false
      }

    },
    mounted() {
      this.upDateStyle()
      this.execAutoClose()

    },
    methods: {
      execAutoClose(){
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDely * 1000)
        }
      },
      upDateStyle(){
        this.$nextTick(()=>{
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      onClickClose() {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)  //this就是这个toast实例
        }
      },
      log() {
        console.log('测试');
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
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    border: 1px solid black;
    font-size: $font-size;
    min-height: $toast-min-height;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    border-radius: 6px;
    background: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    .close {
      padding: 0 8px;
      flex-shrink: 0;
    }
    .message{
      padding: 8px 8px;
    }
    .line {
      height: 100%;
      border-left: 1px solid #999;
      margin-left: 8px;
    }
  }
</style>