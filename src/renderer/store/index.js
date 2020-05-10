import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: 'quest',
    modal: {}
  },
  getters: {
    login: state => state.login,
    modal: state => state.modal
  },
  mutations: {
    SET_LOGIN (state, login) {
      state.login = login
    },
    SET_MODAL (state, modal) {
      state.modal = modal
    }
  }
})
