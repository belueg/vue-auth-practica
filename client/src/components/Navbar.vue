<template>
  <div class="navbar">
    <router-link to="/" v-if="!this.$store.state.user"> Home</router-link>
    <router-link to="/register" v-if="!this.$store.state.user"
      >Register</router-link
    >
    <router-link to="/login" v-if="!this.$store.state.user">Login</router-link>
    <router-link to="/profile" v-if="this.$store.state.user"
      >Profile</router-link
    >
    <router-link to="/about">About</router-link>
    <button @click="logout" v-if="this.$store.state.user">log out</button>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$store.commit('loggedOut')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  padding: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0px 10px;

    &.router-link-exact-active {
      color: #714dd2;
    }
  }
}
</style>
