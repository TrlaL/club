<template>
  <div class="manager-item" @click="openModalEditComputer">
    <div class="order">
      {{ order + 1 }}
    </div>
    <div class="data">
      <div class="title">
        <Icon class="mr-1" name="place" size="14px" />
        {{ item.ip }}
      </div>
      <div class="time">00:00</div>
      <div class="periods">
        <div class="from">{{ item.dateFrom || '-' }}</div>
        <div class="to">{{ item.dateTo || '-' }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    },
    order: {
      required: true,
      type: Number
    }
  },

  methods: {
    openModalEditComputer () {
      this.$store.commit('SET_MODAL', {
        name: 'ModalEditComputer',
        item: this.item
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.manager-item {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #444;
  cursor: pointer;
  display: flex;

  .order {
    align-items: center;
    background: #66BB6A;
    color: #fff;
    display: flex;
    font-size: 2em;
    font-weight: bold;
    justify-content: center;
    padding: 20px;
  }

  .data {
    display: flex;
    flex: 1;
    flex-direction: column;

    .title {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 3px;
    }

    .time {
      align-items: center;
      display: flex;
      flex: 1;
      font-size: 3em;
      justify-content: center;
    }

    .periods {
      background: #eee;
      border-top: 1px solid #ccc;
      display: flex;
      font-size: 0.8em;
      justify-content: space-between;
      padding: 2px;
      text-align: center;

      .from {
        border-right: 1px solid #ccc;
        flex: 1;
      }

      .to {
        flex: 1;
      }
    }
  }
}
</style>