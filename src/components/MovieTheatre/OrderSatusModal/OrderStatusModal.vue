<template>
  <div class="osm-wrap">
    <OrderCard v-for="(card, $index) in selected_sits_list" :key="$index" :data="card"></OrderCard>
    <div class="summary" v-if="selected_sits_list.length">
      Сумма заказа {{selected_sits_list.length * 100}} руб
    </div>
    <button class="clear-button" @click="sitHandler($event, 'clean')">Отмена</button>
    <button class="clear-button" @click="sitHandler($event, 'book')">Купить</button>
  </div>
</template>

<script>
  import OrderCard from './OrderCard/OrderCard'
  import { mapState } from "vuex";

  export default {
    name: 'OrderStatusModal',
    components: { OrderCard },
    computed:{
      ...mapState(["selected_sits_list"])
    },
    methods: {
      sitHandler(e, type){
        this.$store.commit('clearSelectedSitsList', type);
        if(type === 'book'){
          this.$store.commit('setModalMessage', {
            message: 'Спасибо за покупку !',
            activate: true,
            timer_out: 1500
          })
        }
      }
    }
  }
</script>

<style scoped>

  @import "OrderStatusModal.css";

</style>
