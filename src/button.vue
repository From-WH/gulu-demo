<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <g-icon v-if="icon" :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    // props:['icon','iconPosition']
    props:{
      icon:{},
      iconPosition:{      //后面是值得配置
        type:String,
        default:'left',
        validate(value){
          return !(value !== 'right' && value !== 'left');
        }
      }
    }
  }
</script>

<style lang="scss">
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;   /*上下对不齐就用*/
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
    >.content {
      order: 2;
    }
    >.icon{
      order:1;
      margin-right: .2em;
    }

    &.icon-right{
      >.content{
        order:1;
      }
      >.icon{
        order:2;
        margin-left: .2em;
        margin-right: 0;
      }
    }
  }

</style>