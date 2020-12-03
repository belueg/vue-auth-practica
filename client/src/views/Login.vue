<template>
  <div>
    <h1>Log in</h1>
    <div class="login">
      <section class=" login-container">
        <b-field label="Email" type="" message="">
          <b-input v-model="user.email" type="email" value="" maxlength="30">
          </b-input>
        </b-field>

        <b-field label="Password">
          <b-input
            v-model="user.password"
            type="password"
            value=""
            password-reveal
          >
          </b-input>
        </b-field>
        <b-button @click="login" type="is-primary" class="mt-3"
          >Log in</b-button
        >
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: { email: '', password: '' }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.user)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  &-container {
    width: 350px;
  }
}
</style>
