<template>
  <div class="results">
    <p>Reaction Time : {{ score }} ms</p>
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: [
    'score'
  ]
}
</script>

<style>

</style>
