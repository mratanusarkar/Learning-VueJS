<template>
  <div class="results">
    <p>Reaction Time : {{ score }} ms</p>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: [
    'score'
  ],
  data() {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score < 50) {
      this.rank = 'Bot or God!!!'
    }
    else if (this.score < 200) {
      this.rank = 'Inhuman Ninja Fingers!!'
    }
    else if (this.score < 500) {
      this.rank = 'Supreme Ninja Fingers!'
    }
    else if (this.score < 1000) {
      this.rank = 'Ninja Fingers'
    }
    else if (this.score < 2000) {
      this.rank = 'Rapid Reflexes'
    }
    else if (this.score < 4000) {
      this.rank = 'Mortal Human'
    }
    else if (this.score < 8000) {
      this.rank = 'Noob Boomer'
    }
    else {
      this.rank = 'Snail pace...'
    }
  }
}
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>
