<template>
  <div class="shell">
    <ShellApps :apps="apps" />
  </div>
</template>

<script>
import ShellApps from '@/components/shell/ShellApps'
import { mapGetters } from 'vuex'
import { remote } from 'electron'

export default {
  components: {
    ShellApps
  },

  data: () => ({
    window: remote.getCurrentWindow()
  }),

  computed: {
    ...mapGetters([
      'apps'
    ])
  },

  created () {
    this.$bus.on('fetchApps', this.fetchApps)
  },

  mounted () {
    this.$store.commit('TOGGLE_HEADER_VISIBLE')
    this.fetchApps()
    this.window.maximize()
    this.window.setKiosk(true)
  },

  beforeDestroy () {
    this.$bus.off('fetchApps', this.fetchApps)
  },

  methods: {
    fetchApps () {
      this.$store.dispatch('fetchApps')
    }
  }
}
</script>

<style lang="scss" scooped>
.shell {
  align-items: center;
  background: url('~@/assets/images/shell.png');
  display: flex;
  height: 100vh;
  justify-content: center;
  user-select: none;

  .area {
    flex: 1;
  }
}
</style>