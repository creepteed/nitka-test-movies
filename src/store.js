import Vue from 'vue'
import Vuex from 'vuex'

import { CONFIG } from './gridConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sits_grid: [],
    selected_sits_list: [],
    modal_trigger: false,
    modal_message: ''
  },
  mutations: {

    generateGrid(state, payload) {
      let rows_count = 0;
      let sits_count = 0;

      while(rows_count !== CONFIG.rows){
        state.sits_grid[rows_count] = [];

        while(sits_count !== CONFIG.sits){
          state.sits_grid[rows_count][sits_count] = CONFIG.status_code.free;
          sits_count++;
        }

        sits_count = 0;
        rows_count++;
      }

      if(CONFIG.random_seed.enable) payload.random_seed();
    },

    fillRandomSits(state, count){
      let free_sits_array = [];

      state.sits_grid.forEach((row, index) => {
       row.forEach((sit, s_index) => free_sits_array.push({row: index, sit: s_index}))
      });

      while(count){

        const index = Math.floor(Math.random() * free_sits_array.length);
        const sit = free_sits_array[index];

        state.sits_grid[sit.row][sit.sit] = CONFIG.status_code.booked

        free_sits_array.splice(index, 1);

        count--;
      }
    },

    setModalMessage(state, payload){
      state.modal_message = payload.message;
      state.modal_trigger = payload.activate;
      if(payload.timer_out){
        setTimeout(() => {
          state.modal_trigger = false;
        }, payload.timer_out)
      }
    },

    clearSelectedSitsList(state, type){
      state.selected_sits_list.forEach(ticket => {
        state.sits_grid[ticket.row][ticket.sit] = type === 'clean' ?
          CONFIG.status_code.free : CONFIG.status_code.booked

        ticket.update();
      })

      state.selected_sits_list = [];
    }

  },
  actions: {

    generateFillSitGrid(store){
      store.commit('generateGrid', {random_seed: () => {store.commit('fillRandomSits', CONFIG.random_seed.sits_to_seed)}});
    },

    toggleSitSelection(store, payload){
      const row = store.state.sits_grid[payload.row];

      if(row[payload.sit] !== CONFIG.status_code.booked){
          if(row[payload.sit] === CONFIG.status_code.selected){
            row[payload.sit] = CONFIG.status_code.free

            const index = store.state.selected_sits_list.findIndex(ticket => {
              if(ticket.sit === payload.sit && ticket.row === payload.row) return true
              return false
            })

            store.state.selected_sits_list.splice(index, 1);
          }else{
            row[payload.sit] = CONFIG.status_code.selected

            store.state.selected_sits_list.push({sit: payload.sit, row: payload.row, update: payload.update})
          }

        store.state.selected_sits_list = [...store.state.selected_sits_list]

        payload.update();
      }

    },

  }
})
