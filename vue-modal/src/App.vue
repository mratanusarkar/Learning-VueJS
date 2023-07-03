<template>
  <!-- Vue 3 now allows us to have multiple elements inside the root template -->
  <Content/>
  <Modal/>
</template>

<script>
import Content from './components/Content.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Content,
    Modal
  },
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
</style>
