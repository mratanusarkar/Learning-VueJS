<template>
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </nav>

  <button @click="back">Go Back</button>
  <button @click="redirect">Redirect</button>
  <button @click="forward">Go Forward</button>

  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      // redirect to a specific location
      this.$router.push({ name: 'Home' })
    },
    back() {
      // going back through the history
      this.$router.go(-1)
    },
    forward() {
      // going forward through the history
      this.$router.go(1)
    },
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
  border-radius: 4px;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
