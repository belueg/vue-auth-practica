<template>
  <div>
    <h1>Log in</h1>
    <div class="login">
      <section class=" login-container">
        <BField label="Email" type="" message="">
          <BInput v-model="user.email" type="email" value="" maxlength="30" />
        </BField>

        <BField label="Password">
          <BInput
            v-model="user.password"
            type="password"
            value=""
            password-reveal
          />
        </BField>
        <BButton @click="login" type="is-primary" class="mt-3">Log in</BButton>
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
