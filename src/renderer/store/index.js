import Vue from 'vue'
import Vuex from 'vuex'
import lodash from 'lodash'
import datastore from '../datastore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    computers: [],
    isHeaderVisible: true,
    login: 'quest',
    modal: {},
    now: '',
    orders: []
  },
  getters: {
    computers: state => state.computers,
    isHeaderVisible: state => state.isHeaderVisible,
    login: state => state.login,
    modal: state => state.modal,
    now: state => state.now,
    orders: state => state.orders
  },
  mutations: {
    SET_COMPUTERS (state, computers) {
      state.computers = computers
    },
    SET_LOGIN (state, login) {
      state.login = login
    },
    SET_MODAL (state, modal) {
      state.modal = modal
    },
    SET_NOW (state, now) {
      state.now = now
    },
    SET_ORDERS (state, orders) {
      state.orders = orders
    },
    SET_ORDERS_TIME (state, { id, time }) {
      let index = lodash.findIndex(state.orders, { _id: id })
      Vue.set(state.orders[index], 'time', time)
    },
    TOGGLE_HEADER_VISIBLE (state) {
      state.isHeaderVisible = !state.isHeaderVisible
    }
  },
  actions: {
    async fetchComputers ({ commit }) {
      let computers = await datastore.asyncFind({ _table: 'computers' })
      commit('SET_COMPUTERS', computers)
    },
    async fetchOrders ({ commit }) {
      let orders = await datastore.asyncFind({ _table: 'orders' })
      commit('SET_ORDERS', orders)
    }
  }
})
