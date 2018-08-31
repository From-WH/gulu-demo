<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script></script>
<style lang="scss">
  .g-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .g-button {
      border-radius: 0;
      margin-left: -1px;
      &:first-child {
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
      }
      &:last-child {
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
      }
      &:hover {
        z-index: 1;
      }
    }
  }
</style>