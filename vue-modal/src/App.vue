<template>
  <!-- Vue 3 now allows us to have multiple elements inside the root template -->

  <!-- page head content -->
  <Content/>

  <!-- modal content -->
  <div v-if="showModal">
    <Modal :theme="mTheme" @closemodal="toggleModal">
      <!-- default slot content -->
      <h1>{{ mHeader }}</h1>
      <p>{{ mContent }}</p>

      <!-- named slot: inject named template -->
      <template v-slot:links>
        <a href="https://github.com/mratanusarkar/Learning-VueJS">source code</a>
        <a href="https://netninja.dev/">project credits</a>
      </template>
    </Modal>
  </div>

  <!-- modal op buttons -->
  <div class="modal-btns">
    <button @click="toggleModal">open lite modal</button>
    <button @click="toggleModal('dark')">open dark modal</button>
  </div>

  <!-- use a css selector to teleport some vue component to a different plave in dom -->
  <teleport to=".jump">
    <h3>I'll jump out of #App but still be controlled by Vue!</h3>
    <p>we can use <b>.class</b> selector or <b>#id</b> selector or any css selector in DOM 
    and tell Vue to teleport some content from vue app to any place in the DOM</p>
  </teleport>
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
#app, .jump {
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
