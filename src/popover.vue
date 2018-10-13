<template>
  <div class="popover" @click="onClick">
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
    mounted() {

    },
    methods: {
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          this.visible = !this.visible
          if (this.visible === true) {
            this.$nextTick(() => {
              document.body.appendChild(this.$refs.contentWrapper)
              let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
              this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
              this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
              let eventHandler = (e) => {
                if (this.$refs.contentWrapper.contains(e.target)) {

                }else {
                  this.visible = false
                  document.removeEventListener('click', eventHandler)
                }

              }
              document.addEventListener('click', eventHandler)
            })
          }
        } else {
          console.log(点击的是下面);
        }
        // this.visible = !this.visible
        //
        //
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