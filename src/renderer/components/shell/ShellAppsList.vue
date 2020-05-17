<template>
  <PerfectScrollbar class="shell-apps-list">
    <transition-group class="main" name="fade" tag="div">
      <div
        class="app"
        v-for="app in apps"
        :key="app._id"
        @click="exec(app.path)">
        <img class="icon" :src="app.icon" />
        <div class="label">{{ app.name }}</div>
      </div>
    </transition-group>
  </PerfectScrollbar>
</template>

<script>
import { exec } from 'child_process'

export default {
  props: {
    apps: {
      required: true,
      type: Array
    }
  },

  methods: {
    exec (path) {
      exec(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.shell-apps-list{
  flex: 1;
  overflow: auto;

  .main {
    display: grid;
    grid-auto-rows: min-content;
    grid-gap: 10px;
    grid-template-columns: repeat(6, 1fr);
    height: 100%;
    padding: 10px;

    .app {
      align-items: center;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      height: 120px;
      transition: all $transition-duration;

      &:hover {
        background: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      }

      .label {
        font-size: 0.9em;
        overflow: hidden;
        margin-top: 5px;
        padding: 0 4px;
        text-align: center;
        text-overflow: ellipsis;
        width: 100%;
      }
    }
  }
}
</style>