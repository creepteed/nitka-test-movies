<template>
  <div id="app">
    <MovieTheatre />
    <transition name="fade">
      <MessageModal :message="modal_message" v-if="modal_trigger"/>
    </transition>
  </div>
</template>

<script>
  import MovieTheatre from './components/MovieTheatre/MovieTheatre'
  import MessageModal from './components/MovieTheatre/MessageModal/MessageModal'
  import { mapState } from 'vuex';

  export default {
    name: 'app',
    components: {
      MovieTheatre, MessageModal
    },
    computed: {
      ...mapState(["modal_trigger", "modal_message"])
    }
  }
</script>

<style>

  @import "GlobalStyles.css";

</style>
