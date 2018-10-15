<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}">
      <slot name="content"></slot>
    </div>
    <span class="button-style" ref="triggerWrapper" style="display:inline-block;">
    <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "GuluPopover",
    props: {
      position: {
        type: String,
        default: 'top',
        validate(value) {
          return ['top', 'right', 'bottom', 'left'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {visible: false}
    },
    methods: {
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapper);
        let {contentWrapper,triggerWrapper} = this.$refs
        let {top, left, height,width} = triggerWrapper.getBoundingClientRect();
        let {height:height2} = contentWrapper.getBoundingClientRect();
        let {right:right2} = contentWrapper.getBoundingClientRect();
        let positions = {
          top:{
            top:top + window.scrollY,
            left:left + window.scrollX,
          },
          bottom:{
            top:top + height + window.scrollY,
            left:left + window.scrollX,
          },
          left:{
            top:top + window.scrollY +(height- height2)/2,
            left:left + window.scrollX,
          },
          right:{
            left:left + window.scrollX + width,
            top:top + window.scrollY +(height- height2)/2,
          }
        }
        contentWrapper.style.top = positions[this.position].top + 'px';
        contentWrapper.style.left = positions[this.position].left + 'px'
      },
      eventHandler(e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
          return;
        }
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
          return
        }
        this.close()
      },
      open() {
        this.visible = true;
        this.$nextTick(() => {
          this.positionContent();
          document.addEventListener('click', this.eventHandler)
        })
      },
      close() {
        this.visible = false;
        document.removeEventListener('click', this.eventHandler)
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()

          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $border-color: #ebeef5;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: .5em 1em;
    background: white;
    font-size: 14px;
    color: #606266;
    filter: drop-shadow(0 2px 2px  rgba(0,0,0,.1));
    max-width: 20em;
    word-break: break-all;
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 10px;
        border: 10px solid transparent;
        border-top-color: $border-color;
      }
      &::after {
        content: '';
        position: absolute;
        top: calc(100% - 1px);
        left: 10px;
        border: 10px solid transparent;
        border-top-color: rgb(255, 255, 255);
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 10px;
        border: 10px solid transparent;
        border-bottom-color: $border-color;
      }
      &::after {
        content: '';
        position: absolute;
        bottom: calc(100% - 1px);
        left: 10px;
        border: 10px solid transparent;
        border-bottom-color: rgb(255, 255, 255);
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before {
        content: '';
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border: 10px solid transparent;
        border-left-color: $border-color;
      }
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: calc(100% - 1px);
        border: 10px solid transparent;
        border-left-color: rgb(255, 255, 255);
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before {
        content: '';
        position: absolute;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border: 10px solid transparent;
        border-right-color: $border-color;
      }
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: calc(100% - 1px);
        border: 10px solid transparent;
        border-right-color: rgb(255, 255, 255);
      }
    }
  }
</style>