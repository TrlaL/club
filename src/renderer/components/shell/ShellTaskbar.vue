<template>
  <div class="shell-taskbar">
    <div class="start-button" @click="toggleTaskbar">
      <Icon name="widgets" />
      <transition name="fade">
        <ShellTaskbarMenu v-show="isTaskbarVisible" />
      </transition>
    </div>
    <div class="date-time">
      <div>{{ time }}</div>
      <div>{{ date }}</div>
    </div>
  </div>
</template>

<script>
import ShellTaskbarMenu from './ShellTaskbarMenu'
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  components: {
    ShellTaskbarMenu
  },

  data: () => ({
    isTaskbarVisible: false
  }),

  computed: {
    ...mapGetters([
      'now'
    ]),
    date () {
      return moment(this.now).format('DD.MM.YYYY')
    },
    time () {
      return moment(this.now).format('HH:mm')
    }
  },

  methods: {
    hideTaskbar () {
      this.isTaskbarVisible = false
    },
    toggleTaskbar () {
      this.isTaskbarVisible = !this.isTaskbarVisible
    }
  }
}
</script>

<style lang="scss" scoped>
$taskbar-size: 45px;

.shell-taskbar {
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-top: 1px solid #111;
  display: flex;
  height: $taskbar-size;
  justify-content: space-between;
  padding: 0 20px 0 0;

  .start-button {
    align-items: center;
    color: #fff;
    cursor: pointer;
    display: flex;
    height: $taskbar-size;
    justify-content: center;
    position: relative;
    transition: background $transition-duration;
    width: $taskbar-size * 1.2;

    &:hover {
      background: rgba(200, 200, 200, 0.1);
    }
  }

  .date-time {
    color: #fff;
    font-size: 0.9em;
    text-align: center;
  }
}
</style>