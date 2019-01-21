<template>
  <div class="sit-wrap"
       :class="{'selected': status === CONFIG.status_code.selected, 'booked': status === CONFIG.status_code.booked}"
       @click="acitvateHandler">
    {{position + 1}}
  </div>
</template>

<script>
  import { CONFIG } from '../../../../gridConfig';

  export default {
    name: 'Sit',
    props: ["position", "row", "status"],
    data(){
      return {
        CONFIG: CONFIG
      }
    },
    mounted(){

    },
    methods: {
      acitvateHandler(){
        this.$store.dispatch('toggleSitSelection',
          {
            row: this.row,
            sit: this.position,
            update: () => {this.$parent.$forceUpdate()
            }
          });
      }
    }
  }
</script>

<style scoped>

@import "Sit.css";

</style>
