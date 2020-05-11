<template>
  <div class="shell-apps">
    <div class="header">
      <Icon class="icon" name="search" />
      <input class="input" placeholder="Поиск...">
      <b-dropdown
        no-caret
        right
        toggle-class="text-decoration-none"
        variant="link">
        <template v-slot:button-content>
          <Icon class="icon" name="menu" />
        </template>
        <b-dropdown-item @click="openModalAddApp">
          Добавить приложение
        </b-dropdown-item>
      </b-dropdown>
    </div>
    <PerfectScrollbar class="main">
      <div class="app" v-for="app in apps" :key="app.id">
        <img class="icon" :src="app.icon" />
        <div class="label">{{ app.name }}</div>
      </div>
    </PerfectScrollbar>
  </div>
</template>

<script>
export default {
  props: {
    apps: {
      required: true,
      type: Array
    }
  },

  methods: {
    openModalAddApp () {
      this.$store.commit('SET_MODAL', { name: 'ModalAddApp' })
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 70%;
$width: 60%;

.shell-apps {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  height: $height;
  overflow: hidden;
  width: $width;

  .header {
    align-items: center;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    display: flex;
    height: 40px;

    .icon {
      color: #555;
      padding: 0 12px;
    }

    .input {
      border: 0;
      display: flex;
      font: inherit;
      flex: 1;
      height: 100%;
      outline: 0;
    }
  }

  .main {
    display: grid;
    flex: 1;
    grid-auto-rows: min-content;
    grid-gap: 10px;
    grid-template-columns: repeat(6, 1fr);
    overflow: auto;
    padding: 10px;

    .app {
      align-items: center;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      padding: 40px 0;
      transition: all $transition-duration;

      &:hover {
        background: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      }

      .label {
        font-size: 0.9em;
        overflow: hidden;
        padding: 0 4px;
        text-align: center;
        text-overflow: ellipsis;
        width: 100%;
      }
    }
  }
}
</style>