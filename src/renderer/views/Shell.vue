<template>
  <div class="shell">
    <ShellApps :apps="apps" />
  </div>
</template>

<script>
import ShellApps from '@/components/shell/ShellApps'
import ps from 'ps-node'
import { exec } from 'child_process'
import { mapGetters } from 'vuex'
import { remote } from 'electron'

export default {
  components: {
    ShellApps
  },

  data: () => ({
    mask: 'explorer.exe',
    process: {},
    window: remote.getCurrentWindow()
  }),

  computed: {
    ...mapGetters([
      'apps', 'isDisabled'
    ])
  },

  watch: {
    process: {
      deep: true,
      handler (process) {
        ps.kill(process.pid)
      }
    }
  },

  created () {
    this.getExplorerProcess()
    this.window.maximize()
    // this.window.setAlwaysOnTop(true)
    // this.window.setClosable(false)
    // this.window.setFocusable(false)
    this.window.setKiosk(true)
  },

  mounted () {
    this.$store.commit('TOGGLE_HEADER_VISIBLE')
    this.$store.dispatch('fetchApps')
  },

  beforeDestroy () {
    alert(this.process.command)
    exec(this.process.command)
  },

  methods: {
    getExplorerProcess () {
      ps.lookup({}, (error, processes) => {
        this.process = processes.find(process => new RegExp(this.mask).test(process.command))
      })
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