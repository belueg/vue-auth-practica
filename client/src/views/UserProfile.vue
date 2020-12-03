<template>
  <div class="userProfile">
    <h1>This is the user profile!</h1>
    <h4>Hello user 🤙🎉</h4>
    <p>
      This is a protected route, and only can be seen for authenticated users.
    </p>
    <p>Not allowed for those who aren't authenticated 🙅‍♀️🙅‍♂️</p>
  </div>
</template>

<script>
export default {
  name: 'UserProfile'
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
}
</style>
