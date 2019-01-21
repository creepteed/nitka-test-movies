<template>
  <div class="oc-wrap">
    Ряд <span>{{data.row + 1}}</span> место <span>{{data.sit + 1}}</span> .
  </div>
</template>

<script>
  export default {
    name: 'OrderCard',
    props: ["data"],
    mounted(){
      console.log(this.data)
    }
  }
</script>

<style scoped>

@import "OrderCard.css";

</style>
