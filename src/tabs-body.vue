<template>
  <div class="tabs-body">
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: 'GuluTabsBody',
    inject: ['eventBus'],
    mounted() {

    }
  }
</script>
<style lang="scss" scoped>

</style>