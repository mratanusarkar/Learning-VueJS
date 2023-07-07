<template>
  <div class="block" v-if="showBlock">
    click me
  </div>
</template>

<script>
export default {
  name: 'Block',
  props: [
    'delay'
  ],
  data() {
    return {
      showBlock: false
    }
  },
  created() {
    console.log('block component got created');
  },
  mounted() {
    console.log('block component got mounted');
    setTimeout(() => {
      this.showBlock = true
      console.log('the timer delay was:', this.delay);
    }, this.delay)
  },
  updated() {
    console.log('block component data got updated');
  },
  unmounted() {
    console.log('block component got unmounted');
  }
}
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
