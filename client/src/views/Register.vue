<template>
  <div>
    <h1>Register</h1>
    <div class="register m-3">
      <section class="register-container">
        <b-field label="Email" type="" message="">
          <b-input v-model="email" type="email" value="" maxlength="30">
          </b-input>
        </b-field>

        <b-field label="Password">
          <b-input v-model="password" type="password" value="" password-reveal>
          </b-input>
        </b-field>
        <b-button @click="register" type="is-primary" class="mt-3"
          >Register</b-button
        >
      </section>
    </div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      message: null
    }
  },
  methods: {
    register() {
      this.$api
        .register({ email: this.email, password: this.password })

        .then(({ data }) => {
          this.message = data.message
          setTimeout(this.deleteServerMsg, 3000)
        })
        .catch(error => {
          this.message = error.response.data.error
          setTimeout(this.deleteServerMsg, 3000)
        })

      this.email = ''
      this.password = ''
    },
    deleteServerMsg() {
      this.message = ''
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
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  &-container {
    width: 350px;
  }
}
</style>
