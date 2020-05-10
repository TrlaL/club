<template>
  <div class="sign-in">
    <div class="top">
      <Icon class="icon" name="person" />
    </div>
    <div class="form">
      <b-form-input
        class="mb-3"
        placeholder="Логин"
        v-model="login">
      </b-form-input>
      <b-form-input
        class="mb-3"
        placeholder="Пароль"
        v-model="password">
      </b-form-input>
      <b-button
        block
        variant="primary"
        @click="signIn">
        Войти
      </b-button>
    </div>
  </div>
</template>

<script>
import { USERS } from '@/constants'

export default {
  data: () => ({
    login: '',
    password: ''
  }),

  computed: {
    isChecked () {
      return USERS.some(({ login, password }) => login === this.login && password === this.password)
    }
  },

  methods: {
    async signIn () {
      if (this.isChecked) {
        this.$store.commit('SET_LOGIN', this.login)
        this.$router.push({ name: this.login === 'user' ? 'shell' : 'manager' })
      } else {
        alert('Данного пользователя не существует!')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$padding: 10px 30px;

.sign-in {
  display: flex;
  flex-direction: column;

  .top {
    align-items: center;
    display: flex;
    height: 150px;
    justify-content: center;

    .icon {
      background: darken($secondary-color, 20);
      border-radius: 100%;
      box-shadow: inset 0 0 2px 2px #aaa;
      font-size: 5em;
      padding: 20px;
    }
  }

  .form {
    flex: 1;
    padding: $padding;
  }
}
</style>