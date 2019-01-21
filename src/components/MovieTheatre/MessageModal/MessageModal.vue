<template>
  <div class="mm-wrap">
    <div class="mm-inner">{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'MessageModal',
    props: ['message']
  }
</script>

<style scoped>

  @import "MessageModal.css";

</style>
