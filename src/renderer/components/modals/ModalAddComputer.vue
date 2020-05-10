<template>
  <b-modal
    centered
    title="Добавить компьютер"
    visible
    @hide="clearModal">
    <b-form-group label="Название">
      <b-form-input
        placeholder="Название"
        v-model="name">
      </b-form-input>
    </b-form-group>
    <b-form-group class="mb-0" label="IP Адрес">
      <b-form-input
        v-model="ip">
      </b-form-input>
    </b-form-group>
    <template #modal-footer>
      <b-button variant="primary" @click="add">Добавить</b-button>
      <b-button variant="secondary" @click="clearModal">Отмена</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  data: () => ({
    name: '',
    ip: '',
    table: 'computers'
  }),

  computed: {
    existRecord () {
      return {
        table: this.table,
        $or: [{ name: this.name }, { ip: this.ip }]
      }
    },
    record () {
      return {
        table: this.table,
        name: this.name,
        ip: this.ip,
        createdAt: new Date()
      }
    }
  },

  methods: {
    async add () {
      if (this.name && this.ip) {
        let count = await this.$db.asyncCount(this.existRecord)
        if (count) {
          alert('Компьютер с таким названием или IP адресом уже есть в базе данных!')
        } else {
          this.$db.insert(this.record)
          this.$bus.emit('add-computer')
          this.clearModal()
        }
      } else {
        alert('Введите название и IP адрес!')
      }
    },
    clearModal () {
      this.$store.commit('SET_MODAL', {})
    }
  }
}
</script>