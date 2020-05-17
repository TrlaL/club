<template>
  <div class="manager">
    <div class="controls">
      <b-button
        class="mr-2 d-flex align-items-center"
        size="sm"
        variant="primary"
        :disabled="isMaxComputers"
        @click="openModalAddComputer">
        <Icon class="mr-1" name="add" size="16px" />
        Добавить
      </b-button>
      <b-button
          class="d-flex align-items-center"
          size="sm"
          variant="primary"
          @click="openModalShowOrders">
          <Icon class="mr-1" name="list" size="16px" />
          Показать лог
        </b-button>
    </div>
    <ManagerGrid
      :columns="columns"
      :computers="sortedComputers"
      :orders="orders"
      :rows="rows">
    </ManagerGrid>
  </div>
</template>

<script>
import ManagerGrid from '@/components/manager/ManagerGrid.vue'
import lodash from 'lodash'
import { mapGetters } from 'vuex'
import { remote } from 'electron'

export default {
  components: {
    ManagerGrid
  },

  data: () => ({
    columns: 5,
    rows: 5,
    window: remote.getCurrentWindow()
  }),

  computed: {
    ...mapGetters([
      'computers',
      'orders'
    ]),
    isMaxComputers () {
      return this.columns * this.rows <= this.computers.length
    },
    sortedComputers () {
      return lodash.sortBy(this.computers, 'createdAt')
    }
  },

  created () {
    this.window.maximize()
  },

  mounted () {
    this.$store.dispatch('fetchComputers')
    this.$store.dispatch('fetchOrders')
  },

  methods: {
    openModalAddComputer () {
      this.$store.commit('SET_MODAL', { name: 'ModalAddComputer' })
    },
    openModalShowOrders () {
      this.$store.commit('SET_MODAL', { name: 'ModalShowOrders' })
    }
  }
}
</script>

<style lang="scss" scoped>
.manager {
  display: flex;
  flex-direction: column;

  .controls {
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;
  }
}
</style>