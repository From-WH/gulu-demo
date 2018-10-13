<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
    <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "GuluPopover",
    data() {
      return {visible: false}
    },
    methods: {
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapper)
        let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      },
      eventHandler(e) {
        if (this.$refs.popover && ( this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
          return;
        }
        this.close()
      },
      open() {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.eventHandler)
        })
      },
      close(){
        this.visible = false
        document.removeEventListener('click', this.eventHandler)
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          }else {
            this.open()

          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    position: absolute;
    transform: translateY(-100%);
    border: 1px solid red;
  }
</style>