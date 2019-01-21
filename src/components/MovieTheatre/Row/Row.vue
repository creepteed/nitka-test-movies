<template>
 <div class="row-wrap">
  <Sit v-for="(sit, $index) in row" :key="$index" :position="$index" :status="sit" :row="position"></Sit>
   <div class="pos position-left">{{position + 1}}</div>
   <div class="pos position-right">{{position + 1}}</div>
 </div>
</template>

<script>
  import Sit from './Sit/Sit'

  export default {
    name: 'Row',
    components: { Sit },
    props: ["position", "row"]
  }
</script>

<style scoped>

@import "Row.css";

</style>
