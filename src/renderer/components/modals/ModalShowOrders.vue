<template>
  <b-modal
    centered
    size="lg"
    title="Лог"
    visible
    @hide="clearModal">
    <b-table bordered :items="sortedOrders" />
  </b-modal>
</template>

<script>
import lodash from 'lodash'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'orders'
    ]),
    sortedOrders () {
      return lodash.sortBy(this.orders, 'fromDate')
    }
  },

  methods: {
    clearModal () {
      this.$store.commit('SET_MODAL', {})
    }
  }
}
</script>