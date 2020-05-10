<template>
  <div id="app">
    <Header v-if="isHeaderVisible" />
    <router-view class="main" />
    <Modals />
  </div>
</template>

<script>
import Header from '@/components/app/Header'
import Modals from '@/components/app/Modals'
import moment from 'moment'
import { mapGetters } from 'vuex'
import { DATE_FORMAT } from '@/constants'

export default {
  components: {
    Header,
    Modals
  },

  data: () => ({
    delay: 1000,
    interval: null
  }),

  computed: {
    ...mapGetters([
      'isHeaderVisible'
    ])
  },

  created () {
    this.updateNow()
    this.interval = setInterval(this.updateNow, this.delay)
  },

  beforeDestroy () {
    clearInterval(this.interval)
  },

  methods: {
    updateNow () {
      this.$store.commit('SET_NOW', moment().format(DATE_FORMAT))
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/ProximaNova.scss';
@import './assets/scss/main.scss';

#app {
  background: transparent;
  display: flex;
  flex-direction: column;
  height: 100%;

  .main {
    flex: 1;
  }
}
</style>