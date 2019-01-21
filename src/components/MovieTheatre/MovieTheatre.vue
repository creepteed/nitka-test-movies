<template>
  <div class="mv-wrap">
    <transition name="fade">
      <OrderStatusModal v-if="selected_sits_list.length" />
    </transition>
    <div class="mv-wrap--iner">
      <div class="screen"></div>
      <Row v-for="(row, $index) in sits_grid" :key="$index" :position="$index" :row="row"></Row>
    </div>
  </div>
</template>

<script>

  import Row from './Row/Row'
  import OrderStatusModal from './OrderSatusModal/OrderStatusModal'
  import { mapState } from 'vuex';

  export default {
    name: 'MovieTheatre',
    components: { Row, OrderStatusModal },
    created(){
      this.$store.dispatch('generateFillSitGrid')
    },
    computed: {
      ...mapState(["sits_grid", "selected_sits_list"])
    }
  }
</script>

<style scoped>

  @import "MovieTheatre.css";

</style>
