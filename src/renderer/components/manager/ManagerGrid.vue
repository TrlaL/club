<template>
  <div class="manager-grid" :style="style">
    <ManagerCell
      v-for="(computer, i) in computers"
      :key="computer.id"
      :computer="computer"
      :order="getCurrentOrder(computer)"
      :index="i">
    </ManagerCell>
  </div>
</template>

<script>
import ManagerCell from './ManagerCell'
import { mapGetters } from 'vuex'

export default {
  components: {
    ManagerCell
  },

  props: {
    columns: {
      default: 5,
      type: Number
    },
    computers: {
      required: true,
      type: Array
    },
    orders: {
      required: true,
      type: Array
    },
    rows: {
      default: 5,
      type: Number
    }
  },

  computed: {
    ...mapGetters([
      'now'
    ]),
    style () {
      return {
        'grid-template-columns': `repeat(${this.columns}, 1fr)`,
        'grid-template-rows': `repeat(${this.rows}, 1fr)`
      }
    }
  },

  methods: {
    getCurrentOrder (computer) {
      return this.orders.find(order => {
        return order.computerId === computer._id && order.fromDate <= this.now && order.toDate >= this.now
      }) || {}
    }
  }
}
</script>

<style lang="scss" scoped>
.manager-grid {
  display: grid;
  flex: 1;
  grid-gap: 10px;
  margin-bottom: 10px;
  padding: 0 20px;
}
</style>