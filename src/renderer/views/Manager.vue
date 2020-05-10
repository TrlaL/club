<template>
  <div class="manager">
    <div class="controls">
      <b-button
        class="d-flex align-items-center"
        size="sm"
        variant="primary"
        @click="openModalAddComputer">
        <Icon class="mr-1" name="add" size="10px" />
        Добавить
      </b-button>
    </div>
    <ManagerGrid :items="items" />
  </div>
</template>

<script>
import ManagerGrid from '@/components/manager/ManagerGrid.vue'
import lodash from 'lodash'
import { remote } from 'electron'

export default {
  components: {
    ManagerGrid
  },

  data: () => ({
    items: [],
    window: remote.getCurrentWindow()
  }),

  created () {
    this.$bus.on('add-computer', this.getComputers)
    this.getComputers()
  },

  beforeDestroy () {
    this.$bus.off('add-computer', this.getComputers)
  },

  methods: {
    async getComputers () {
      this.items = lodash.sortBy(await this.$db.asyncFind({ table: 'computers' }), 'createdAt')
    },
    openModalAddComputer () {
      this.$store.commit('SET_MODAL', { name: 'ModalAddComputer' })
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