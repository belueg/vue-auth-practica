<template>
  <div class="navbar">
    <RouterLink to="/" v-if="!$store.getters.isLoggedIn">Home</RouterLink>
    <RouterLink to="/register" v-if="!$store.getters.isLoggedIn">
      Register
    </RouterLink>
    <RouterLink to="/login" v-if="!$store.getters.isLoggedIn">Login</RouterLink>
    <RouterLink to="/profile" v-if="$store.getters.isLoggedIn">
      Profile
    </RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/adminpanel" v-if="$store.getters.isAdmin">
      Secret admin button
    </RouterLink>

    <button @click="logout" v-if="$store.getters.isLoggedIn">log out</button>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$store.commit('logOut')
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
