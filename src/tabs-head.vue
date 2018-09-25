<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>

</template>

<script>
  export default {
    name:'GuluTabsHead',
    inject:['eventBus'],
  }
</script>
<style lang="scss" scoped></style>