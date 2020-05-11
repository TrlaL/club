<template>
  <div class="manager-cell" @click="openModalEditComputer">
    <div class="order" :class="orderClassName">
      <div class="wrapper">
        <Icon name="desktop_windows" size="30px" />
        <div class="label">{{ index + 1 }}</div>
      </div>
    </div>
    <div class="data">
      <div class="title">
        <Icon class="mr-1" name="place" size="14px" />
        {{ computer.ip }}
      </div>
      <div class="time">
        {{ isActive ? time : '00:00:00' }}
      </div>
      <div class="periods">
        <div class="from">{{ isActive ? order.fromDate : '-' }}</div>
        <div class="to">{{ isActive ? order.toDate : '-' }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  props: {
    computer: {
      required: true,
      type: Object
    },
    index: {
      required: true,
      type: Number
    },
    order: {
      required: true,
      type: Object
    }
  },

  computed: {
    ...mapGetters([
      'now'
    ]),
    isActive () {
      return this.now >= this.order.fromDate && this.now <= this.order.toDate
    },
    orderClassName () {
      return this.isActive ? 'order_active' : 'order_free'
    },
    time () {
      let diff = moment(this.order.toDate).diff(this.now)
      let duration = moment.duration(diff)
      let times = [duration.hours(), duration.minutes(), duration.seconds()]
      let strings = times.map(time => this.pad(time))
      return strings.join(':')
    }
  },

  methods: {
    openModalEditComputer () {
      this.$store.commit('SET_MODAL', {
        name: 'ModalEditComputer',
        computer: this.computer
      })
    },
    pad (value) {
      return value < 10 ? '0' + value : value
    }
  }
}
</script>

<style lang="scss" scoped>
.manager-cell {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #444;
  cursor: pointer;
  display: flex;

  .order {
    align-items: center;
    color: #fff;
    display: flex;
    font-size: 2em;
    justify-content: center;
    padding: 12px;

    &_active {
      background: #e53935;
    }

    &_free {
      background: #66BB6A;
    }

    .wrapper {
      display: inline-flex;
      position: relative;

      .label {
        font-size: 0.5em;
        position: absolute;
        text-align: center;
        top: 2px;
        width: 100%;
      }
    }
  }

  .data {
    display: flex;
    flex: 1;
    flex-direction: column;

    .title {
      align-items: center;
      color: #888;
      display: flex;
      font-size: 0.9em;
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