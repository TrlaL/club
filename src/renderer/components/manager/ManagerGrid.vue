<template>
  <div class="manager-grid" :style="style">
    <ManagerItem
      v-for="(item, i) in items"
      :key="item.id"
      :order="i"
      :item="item">
    </ManagerItem>
  </div>
</template>

<script>
import ManagerItem from './ManagerItem'

export default {
  components: {
    ManagerItem
  },

  props: {
    items: {
      required: true,
      type: Array
    }
  },

  data: () => ({
    columns: 5,
    rows: 5
  }),

  computed: {
    style () {
      return {
        'grid-template-columns': `repeat(${this.columns}, 1fr)`,
        'grid-template-rows': `repeat(${this.rows}, 1fr)`
      }
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