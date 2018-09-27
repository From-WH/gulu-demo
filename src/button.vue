<template>
  <button class="g-button" @click="$emit('click')" :class="{[`icon-${iconPosition}`]:true}">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading" v-if="loading" name="loading"></g-icon>
    <div class="g-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from './icon'
  export default {
    name:'GuluButton',
    components:{
      'g-icon':Icon,
    },
    // props:['icon','iconPosition']
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false,
      },
      iconPosition: {      //后面是值得配置
        type: String,
        default: 'left',
        validator(value) {
          return !(value !== 'right' && value !== 'left');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $font-size:14px;
  $button-height:32px;
  $border-radius:4px;
  $border-color:#999;
  $button-bg:white;
  $border-color-hover:#666;
  $button-active-bg:#eee;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(100deg);
    }
  }
  .g-button {

    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle; /*上下对不齐就用*/
    &:hover {
      border-color: $border-color-hover;
    }
    &:active {
      background-color: $button-active-bg;
    }
    &:focus {
      outline: none;
    }
    > .g-button-content {
      order: 2;
    }
    > .icon {
      order: 1;
      margin-right: .1em;
    }

    &.icon-right {
      > .g-button-content {
        order: 1;
      }
      > .icon {
        order: 2;
        margin-left: .1em;
        margin-right: 0;
      }
    }
    .loading {
      animation: spin 2s infinite linear;
    }
  }

</style>