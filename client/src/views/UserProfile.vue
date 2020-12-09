<template>
  <div class="userProfile">
    <h1>This is the user profile!</h1>
    <h4 class="userProfile-email is-size-4">{{ email }} 🤙🎉</h4>
    <p>
      This is a protected route, and only can be seen for authenticated users.
    </p>
    <p>Not allowed for those who aren't authenticated 🙅‍♀️🙅‍♂️</p>
    <div>
      <p class="is-size-3" style="color:blue;">role: {{ role }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      role: '',
      email: ''
    }
  },
  mounted() {
    this.$api()
      .userData()
      .then(({ data }) => ((this.role = data.role), (this.email = data.email)))
      .catch(({ response }) => console.log(response.error))
  }
}
</script>

<style lang="scss" scoped>
.userProfile {
  h1,
  h4,
  p {
    margin: 20px;
    font-size: 20px;
  }
  &-email {
    color: blue;
  }
}
</style>
