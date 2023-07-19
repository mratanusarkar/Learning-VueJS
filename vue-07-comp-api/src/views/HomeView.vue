<template>
  <div class="home">
    Home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <p>data is {{ data }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  // composition api --> setup()
  setup() {
    // setup is first!
    console.log('setup called')

    // this data values are not reactive
    // later if the value changes, it won't reflect to dom
    let name = 'mario'
    let age = 30

    const handleClick = () => {
      console.log('you clicked me!');
    }

    return { name, age, handleClick }
  },
  created() {
    console.log('created called');
  },
  mounted() {
    console.log('mounted called');
  },
  data() {
    return {
      // this data values are reactive
      // value changes are reflected in template and dom
      data: 10
    }
  }
}
</script>
