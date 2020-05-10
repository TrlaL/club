<template>
  <div id="app">
    <Header />
    <router-view class="main" />
    <Modals />
  </div>
</template>

<script>
import Header from '@/components/app/Header'
import Modals from '@/components/app/Modals'

export default {
  components: {
    Header,
    Modals
  }
}
</script>

<style lang="scss">
@import './assets/scss/ProximaNova.scss';
@import './assets/scss/main.scss';

#app {
  background: $secondary-color;
  display: flex;
  flex-direction: column;
  height: 100%;

  .main {
    flex: 1;
  }
}
</style>