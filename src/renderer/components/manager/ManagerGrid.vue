<template>
  <div class="manager-grid">
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
  }
}
</script>

<style lang="scss" scoped>
.manager-grid {
  display: grid;
  flex: 1;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  margin-bottom: 10px;
  padding: 0 20px;
}
</style>