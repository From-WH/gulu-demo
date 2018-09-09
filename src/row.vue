<template>
  <div class="row" :style="rowStyle" :class="rowClass">
  <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'GuluRow',
    props:{
      gutter:{
        type:[Number,String]
      }
    },
    computed:{
      rowStyle(){
        let {gutter} = this
        return {marginRight:-gutter/2+'px' ,marginLeft:-gutter/2+'px'}
      },
      rowClass(){
        let {align} = this
        return [align && `align-${align}`]
      }
    },
    mounted(){
      this.$children.forEach((vm)=>{
        vm.gutter = this.gutter
      })
    }
  }
</script>
<style scoped lang="scss">
  .row {
    display: flex;
    &.align-left{
      justify-content: flex-start;
    }
    &.align-right{
      justify-content: flex-end;
    }
    &.align-center{
      justify-content: center;
    }
  }
</style>