<template>
  <component :is="modal.name" />
</template>

<script>
import ModalAddComputer from '../modals/ModalAddComputer'
import ModalEditComputer from '../modals/ModalEditComputer'
import { mapGetters } from 'vuex'

export default {
  components: {
    ModalAddComputer,
    ModalEditComputer
  },

  computed: {
    ...mapGetters([
      'modal'
    ])
  }
}
</script>