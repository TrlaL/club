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
        v-model="time"
        :ru="ru">
      </b-form-timepicker>
    </b-form-group>
    <b-form-group class="mb-0" label="Стоймость">
      <b-form-input
        v-model="price">
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
    time: null
  }),

  computed: {
    labels () {
      return {
        labelHours: 'Часы',
        labelMinutes: 'Минуты',
        labelSeconds: 'Секунды',
        labelIncrement: 'Увеличить',
        labelDecrement: 'Уменьшить',
        labelSelected: 'Выбрано',
        labelNoTimeSelected: 'Не выбрано',
        labelCloseButton: 'Закрыть'
      }
    }
  },

  methods: {
    clearModal () {
      this.$store.commit('SET_MODAL', {})
    }
  }
}
</script>