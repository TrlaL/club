<template>
  <component :is="modal.name" />
</template>

<script>
import ModalAddComputer from '../modals/ModalAddComputer'
import ModalEditComputer from '../modals/ModalEditComputer'
import ModalShowOrders from '../modals/ModalShowOrders'
import { mapGetters } from 'vuex'

export default {
  components: {
    ModalAddComputer,
    ModalEditComputer,
    ModalShowOrders
  },

  computed: {
    ...mapGetters([
      'modal'
    ])
  }
}
</script>