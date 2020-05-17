<template>
  <b-modal
    centered
    title="Редактировать компьютер"
    visible
    @hide="clearModal">
    <b-form-group label="Время">
      <b-form-timepicker
        locale="ru"
        v-bind="labels"
        v-model="time">
      </b-form-timepicker>
    </b-form-group>
    <b-form-group class="mb-0" label="Стоймость">
      <b-form-input
        v-model="price">
      </b-form-input>
    </b-form-group>
    <template #modal-footer>
      <b-button variant="primary" @click="save">Сохранить</b-button>
      <b-button variant="secondary" @click="clearModal">Отмена</b-button>
    </template>
  </b-modal>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import { DATE_FORMAT, TIME_LABELS } from '@/constants'

export default {
  data: () => ({
    labels: TIME_LABELS,
    price: 100,
    table: 'orders',
    time: null
  }),

  computed: {
    ...mapGetters([
      'modal'
    ]),
    messageBoxOptions () {
      return {
        centered: true,
        title: 'Ошибка'
      }
    },
    parsedTime () {
      let parts = this.time.split(':')
      return {
        hours: parseInt(parts[0]),
        minutes: parseInt(parts[1]),
        seconds: parseInt(parts[2])
      }
    },
    record () {
      let { hours, minutes } = this.parsedTime
      return {
        _table: this.table,
        computerId: this.modal.computer._id,
        fromDate: moment().format(DATE_FORMAT),
        price: this.price,
        time: this.time,
        toDate: moment().add(hours, 'hours').add(minutes, 'minutes').format(DATE_FORMAT)
      }
    }
  },

  methods: {
    async save () {
      if (this.time && this.price) {
        await this.$db.asyncInsert(this.record)
        this.$store.dispatch('fetchOrders')
        this.clearModal()
      } else {
        this.$bvModal.msgBoxOk('Выберите время и укажите стоймость!', this.messageBoxOptions)
      }
    },
    addToDate (date, seconds) {
      return new Date(date + seconds)
    },
    clearModal () {
      this.$store.commit('SET_MODAL', {})
    }
  }
}
</script>