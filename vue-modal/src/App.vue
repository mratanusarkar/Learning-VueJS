<template>
  <!-- Vue 3 now allows us to have multiple elements inside the root template -->
  <Content/>
  <div v-if="showModal">
    <Modal :header="mHeader" :content="mContent" :theme="mTheme" @closemodal="toggleModal"/>
  </div>
  <div class="modal-btns">
    <button @click="toggleModal">open lite modal</button>
    <button @click="toggleModal('dark')">open dark modal</button>
  </div>
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
  data() {
    return {
      mHeader: 'Modal Title',
      mContent: 'here is a sample modal text content',
      mTheme: 'lite',
      showModal: false
    }
  },
  methods: {
    toggleModal(theme) {
      this.showModal = !this.showModal;
      this.mTheme = theme ? theme : 'lite'
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
.modal-btns {
  margin: 20px;
  padding: 30px;
}
</style>
