<template>
  <div class="shell-apps">
    <div class="header">
      <Icon class="icon" name="search" />
      <input class="input" placeholder="Поиск..." v-model="search">
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
    <ShellAppsList :apps="filteredApps" />
  </div>
</template>

<script>
import ShellAppsList from './ShellAppsList'
import lodash from 'lodash'

export default {
  components: {
    ShellAppsList
  },

  props: {
    apps: {
      required: true,
      type: Array
    }
  },

  data: () => ({
    search: ''
  }),

  computed: {
    filteredApps () {
      return lodash.sortBy(this.apps.filter(({ name }) => {
        let expression = new RegExp(this.search, 'i')
        return expression.test(name)
      }), 'createdAt')
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
}
</style>