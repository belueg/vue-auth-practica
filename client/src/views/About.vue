<template>
  <div class="about">
    <h1 class="m-3 ">About this project</h1>
    <p>
      This is an authentication example made by @belueg. I'm working with
      different technologies:
    </p>
    <ul>
      <li>Vue</li>
      <li>Vue router</li>
      <li>JWT</li>
      <li>Axios</li>
      <li>components: Buefy</li>
      <li>Api</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: bold;
  }
  ul {
    list-style: circle;
    margin-top: 30px;
    width: fit-content;
    text-align: left;
  }
}
</style>
