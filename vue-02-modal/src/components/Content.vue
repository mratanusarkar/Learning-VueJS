<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleButtonClick" @click.ctrl="resetTextbox">click me</button>
  <h3 @click="handleH3Click">Last Entry: {{ data }}</h3>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      title: "Welcome to My First Vue App!",
      data: "null"
    }
  },
  methods: {
    handleButtonClick() {
      // access the DOM Element via $ref in contrary to the DOM query selector
      console.log(this.$refs.name);
      this.data = this.$refs.name.value ? this.$refs.name.value : "null"
      
      // add, remove, inject classes dynamically
      if (this.$refs.name.value) {
        this.$refs.name.classList.remove('fail')
        this.$refs.name.classList.add('pass')
      } else {
        this.$refs.name.classList.remove('pass')
        this.$refs.name.classList.add('fail')
      }
    },
    handleH3Click() {
      // we can also access other normal javascript methods & functions
      this.$refs.name.focus()
    },
    resetTextbox() {
      this.$refs.name.classList.remove('pass')
      this.$refs.name.classList.remove('fail')
    }
  }
}
</script>

<style scoped>
h1 {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding-top: 10px;
  padding-bottom: 10px;
}
.pass {
  border: 2px solid green;
}
.fail {
  border: 2px solid red;
}
</style>
