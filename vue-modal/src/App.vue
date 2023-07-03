<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: "Welcome to My First Vue App!"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
