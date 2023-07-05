<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ dark: theme === 'dark' }">
      <!-- default slot content appears here -->
      <slot>defalut content to show up if no default content is passed from parent</slot>
      <div class="actions">
        <!-- named slot content appears on call -->
        <slot name="links"></slot>
      </div>
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
  ],
  methods: {
    closeModal() {
      this.$emit('closemodal')
    }
  }
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
.modal p {
  font-style: normal;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #333;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
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
.modal.dark .actions {
  color: white;
}
.modal.dark .actions a {
  color: white;
  border: 1px solid white;
}
</style>
