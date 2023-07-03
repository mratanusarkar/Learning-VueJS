<template>
  <div class="backdrop">
    <div class="modal" :class="{ dark: theme === 'dark' }">
      <h1>{{ header }}</h1>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: [
    'header',
    'content',
    'theme'
  ]
};
</script>

<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.modal.dark {
  background-image: initial;
  background-color: rgb(24, 26, 27);
}
.modal.dark h1 {
  color: rgb(60, 252, 227);
  border-color: initial;
}
.modal.dark p {
  color: rgb(174, 194, 211);
}
</style>
