<template>
  <b-modal
    centered
    title="Добавить приложение"
    visible
    @hide="clearModal">
    <b-form-group label="Приложение">
      <b-form-file
        accept=".exe"
        placeholder="Выберите файл..."
        v-model="file">
      </b-form-file>
    </b-form-group>
    <b-form-group label="Название">
      <b-form-input v-model="name" />
    </b-form-group>
    <template #modal-footer>
      <b-button variant="primary" :disabled="!icon" @click="add">Добавить</b-button>
      <b-button variant="secondary" @click="clearModal">Отмена</b-button>
    </template>
  </b-modal>
</template>

<script>
import iconExtractor from 'icon-extractor'
import moment from 'moment'
import { DATE_FORMAT } from '@/constants'

export default {
  data: () => ({
    iconAppend: 'data:image/jpeg;base64, ',
    icon: null,
    name: '',
    file: null,
    path: '',
    table: 'apps'
  }),

  watch: {
    file ({ name, path }) {
      iconExtractor.getIcon(name, path)
    }
  },

  created () {
    iconExtractor.emitter.on('icon', data => {
      this.icon = this.iconAppend + data.Base64ImageData
      this.name = data.Context
      this.path = data.Path
    })
  },

  methods: {
    async add (data) {
      if (this.file && this.path) {
        await this.$db.asyncInsert(this.getRecord(data))
        this.$bus.emit('fetchApps')
        this.clearModal()
      } else {
        alert('Выберите приложение и укажите название!')
      }
    },
    clearModal () {
      this.$store.commit('SET_MODAL', {})
    },
    getRecord (data) {
      return {
        _table: this.table,
        createdAt: moment().format(DATE_FORMAT),
        icon: this.icon,
        name: this.name,
        path: this.path
      }
    }
  }
}
</script>