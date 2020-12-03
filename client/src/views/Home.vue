<template>
  <div class="home">
    <HelloWorld />
    <b-button type="is-primary">Log in</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
