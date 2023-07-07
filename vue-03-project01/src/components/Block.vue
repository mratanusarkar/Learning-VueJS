<template>
  <div class="block" ref="block" v-if="showBlock">
    <div class="clickbox" ref="box" @click="stopTimer">click me</div>
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
      showBlock: false,
      timer: null,
      boxChanger: null,
      reactionTime: 0,
      blockWidth: 400,
      blockHeight: 330,
      boxWidth: 50,
      boxHeight: 50,
      boxX: 0,
      boxY: 0,
      boxTextColor: '#ffffff',
      boxColor: '#0faf87',
      boxChangeInterval: 800
    }
  },
  created() {
    console.log('block component got created');
  },
  mounted() {
    console.log('block component got mounted');
    setTimeout(() => {
      this.showBlock = true
      this.startTimer()
      console.log('the timer delay was:', this.delay);
    }, this.delay)
  },
  updated() {
    console.log('block component data got updated');
    this.startBoxChanger()
    // shouldn't calling startBoxChanger() trigger updated() again?! strange it does not...
  },
  unmounted() {
    console.log('block component got unmounted');
    this.stopBoxChanger()
  },
  methods : {
    startTimer(interval=10) {
      console.log("starting reaction timer...");
      this.timer = setInterval(() => {
        this.reactionTime += interval
      }, interval)
    },
    stopTimer() {
      clearInterval(this.timer)
      console.log('reaction time:', this.reactionTime);
      this.$emit('gameover', this.reactionTime)
    },
    startBoxChanger() {
      console.log("starting box changer...");
      this.boxChanger = setInterval(() => {
        this.changeBox()
      }, this.boxChangeInterval)
    },
    stopBoxChanger() {
      clearInterval(this.boxChanger)
    },
    getRandomBoxPosition() {
      this.boxX = (Math.random() * (this.blockWidth - this.boxWidth)).toFixed()
      this.boxY = (Math.random() * (this.blockHeight - this.boxHeight)).toFixed()
      console.log(`box position (x, y): (${this.boxX}, ${this.boxY})`);
    },
    getRandomBoxColor() {
      this.boxColor = '#' + Math.round(0xffffff * Math.random()).toString(16)

      // Calculate the complementary color
      let r = parseInt(this.boxColor.slice(1, 3), 16);
      let g = parseInt(this.boxColor.slice(3, 5), 16);
      let b = parseInt(this.boxColor.slice(5, 7), 16);
      let rComplement = (255 - r).toString(16).padStart(2, "0");
      let gComplement = (255 - g).toString(16).padStart(2, "0");
      let bComplement = (255 - b).toString(16).padStart(2, "0");

      this.boxTextColor = "#" + rComplement + gComplement + bComplement;
      console.log("box color:", this.boxColor, "text color:", this.boxTextColor);
    },
    changeBox() {
      this.getRandomBoxPosition()
      this.getRandomBoxColor()
      this.$refs.box.style.left = this.boxX + 'px'
      this.$refs.box.style.top = this.boxY + 'px'
      this.$refs.box.style.background = this.boxColor
      this.$refs.box.style.color = this.boxTextColor
      this.$refs.block.style.background = this.boxTextColor
    }
  }
}
</script>

<style>
.block {
  width: 400px;
  height: 330px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 0;
  margin: 40px auto;
}
.clickbox {
  margin: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: white;
  color: #0faf87;
  text-align: center;
  display: flex;
  align-content: center;
  align-items: center;
  position: relative;
  left: 30px;
  top: 30px;
}
</style>
