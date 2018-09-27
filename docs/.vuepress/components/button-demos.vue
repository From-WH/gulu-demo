<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="setting">带有icon</g-button>
    <g-button :loading="true">带有loading</g-button>
    <g-button disabled>不可点击</g-button>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    components:{
      'g-button':Button
    }
  }
</script>