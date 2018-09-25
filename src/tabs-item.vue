<template>
  <div class="tabs-item" @click="xxx" :class="classes">
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
      desabled: {
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
          active: this.active
        }
      }
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name)

      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    &.active {
      background-color: red;
    }
  }
</style>