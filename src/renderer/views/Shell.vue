<template>
  <div class="shell">
    <div class="area"></div>
    <ShellTaskbar />
  </div>
</template>

<script>
import ShellTaskbar from '@/components/shell/ShellTaskbar'
import { remote } from 'electron'

export default {
  components: {
    ShellTaskbar
  },

  data: () => ({
    window: remote.getCurrentWindow()
  }),

  created () {
    this.$store.commit('TOGGLE_HEADER_VISIBLE')
    this.window.maximize()
    this.window.setKiosk(true)
  }
}
</script>

<style lang="scss" scooped>
.shell {
  background: url('~@/assets/images/shell.png');
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  user-select: none;

  .area {
    flex: 1;
  }
}
</style>