<template>
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GuluTabsItem',
    inject: ['eventBus'],
    data() {     //props需要用户（开发者）传值就放在props里       如果不需要再传了，就放在data里，自身维护
      return {
        active: false,
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        require: true
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
    computed: {
      classes() {
        return {
          active: this.active,
          disabled:this.disabled
        }
      }
    },
    methods: {
      onClick() {
        if (this.disabled) {
          return {}
        }
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $blue: blue;
  $disabled-text-color:grey;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $blue;
      font-weight: bold;
    }
    &.disabled{
      color: $disabled-text-color;
    }
  }
</style>