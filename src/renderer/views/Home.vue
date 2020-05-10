<template>
  <div class="home">
    <b-button variant="primary" @click="goToSignIn">Авторизация</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    goToSignIn () {
      this.$router.push({ name: 'sign-in' })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}
</style>