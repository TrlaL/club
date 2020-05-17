<template>
  <b-modal
    centered
    title="Добавить компьютер"
    visible
    @hide="clearModal">
    <b-form-group label="Название">
      <b-form-input v-model="name">
      </b-form-input>
    </b-form-group>
    <b-form-group class="mb-0" label="IP Адрес">
      <b-form-input v-model="ip">
      </b-form-input>
    </b-form-group>
    <template #modal-footer>
      <b-button variant="primary" @click="add">Добавить</b-button>
      <b-button variant="secondary" @click="clearModal">Отмена</b-button>
    </template>
  </b-modal>
</template>

<script>
import moment from 'moment'
import { DATE_FORMAT } from '@/constants'

export default {
  data: () => ({
    name: '',
    ip: '',
    table: 'computers'
  }),

  computed: {
    existRecord () {
      return {
        _table: this.table,
        $or: [{ name: this.name }, { ip: this.ip }]
      }
    },
    messageBoxOptions () {
      return {
        centered: true,
        title: 'Ошибка'
      }
    },
    record () {
      return {
        _table: this.table,
        name: this.name,
        ip: this.ip,
        createdAt: moment().format(DATE_FORMAT)
      }
    }
  },

  methods: {
    async add () {
      if (this.name && this.ip) {
        let count = await this.$db.asyncCount(this.existRecord)
        if (count) {
          this.$bvModal.msgBoxOk('Компьютер с такими данными уже есть в базе!', this.messageBoxOptions)
        } else {
          this.$db.insert(this.record)
          this.$store.dispatch('fetchComputers')
          this.clearModal()
        }
      } else {
        this.$bvModal.msgBoxOk('Введите название и IP адрес!', this.messageBoxOptions)
      }
    },
    clearModal () {
      this.$store.commit('SET_MODAL', {})
    }
  }
}
</script>