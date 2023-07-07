<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="startgame" :disabled="isPlaying">play</button>
  <Block v-if="isPlaying" :delay="delay" @gameover="endgame"/>
  <Results v-if="showResults" :score="score"/>
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: {
    Block,
    Results
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: '0',
      showResults: false
    }
  },
  methods: {
    startgame() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
    },
    endgame(data) {
      this.score = String(parseInt(data))
      this.isPlaying = false
      this.showResults = true
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
  color: #444;
  margin-top: 60px;
}
</style>
