<template>
  <div id="main"></div>
</template>

<script>
export default {
  name: 'MainSvg',
  data () {
    return {
      draw: null,
      main: null,
      baseline: 300
    }
  },
  mounted () {
    this.drawCanvas()
  },
  methods: {
    drawCanvas () {
      this.draw = this.$svg('drawing')
      this.main = this.draw.group()
      Object.defineProperty(this, '$svgMain', { value: this.main })
    }
  }
}
</script>

<style scoped>

</style>
