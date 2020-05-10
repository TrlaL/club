<template>
  <div class="header">
    <div class="title">
      Панель управления
    </div>
    <div class="controls">
      <Icon
        class="icon"
        name="remove"
        pointer
        @click.native="minimize">
      </Icon>
      <Icon
        class="icon"
        name="crop_landscape"
        pointer
        @click.native="toggle">
      </Icon>
      <Icon
        class="icon"
        name="close"
        pointer
        @click.native="close">
      </Icon>
    </div>
  </div>
</template>

<script>
import { remote } from 'electron'

export default {
  data: () => ({
    window: remote.getCurrentWindow()
  }),

  methods: {
    close () {
      this.window.close()
    },
    minimize () {
      this.window.minimize()
    },
    toggle () {
      if (this.window.isMaximized()) {
        this.window.restore()
      } else {
        this.window.maximize()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$padding: 12px;

.header {
  align-items: center;
  background: $primary-color;
  color: #fff;
  display: flex;
  font-size: 1.1em;
  justify-content: center;
  padding: $padding;
  position: relative;

  .controls {
    position: absolute;
    right: $padding;

    .icon {
      font-size: 16px;
      padding: 4px 8px;
      transition: background $transition-duration;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>