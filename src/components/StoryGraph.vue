<template>
  <div>
    <h1>Story Graph</h1>
    <div id="drawing"></div>
  </div>
</template>

<script>
import * as SVG from 'svg.js'
import '@/packages/svg.path.js'

export default {
  name: 'StoryGraph',
  data () {
    return {
      draw: null,
      main: null,
      baseline: 300
    }
  },
  mounted () {
    this.drawCanvas()
    this.drawDebugGrid()
    this.drawMainLine()
    this.drawSplit(100)
  },
  created () {

  },
  methods: {
    drawCanvas () {
      this.draw = SVG('drawing')
      this.main = this.draw.group()
    },
    drawMainLine () {
      let mainLine = this.main.path().M({x: 0, y: this.baseline}).l({x: 1000, y: 0})
      mainLine.fill('none')
      mainLine.stroke({ color: 'black', width: 4, linecap: 'round', linejoin: 'round' })
    },
    drawSplit (xPos) {
      let splitLine = this.main.path().M({x: xPos, y: this.baseline}).c(
        {x: 50, y: 0},
        {x: 50, y: -100},
        {x: 100, y: -100})
      splitLine.fill('none')
      splitLine.stroke({ color: 'green', width: 4, linecap: 'round', linejoin: 'round' })
    },
    drawDebugGrid () {
      let pattern = this.draw.pattern(25, 25, function(add) {
        add.line(0, 0, 0, 25).stroke({width: 1, color: '#ccc'})
        add.line(0, 0, 25, 0).stroke({width: 1, color: '#ccc'})
      })

      this.main.rect('100%', '100%').fill(pattern)
    }
  }
}
</script>

<style scoped>
  #drawing {
    outline: 1px solid #ccc;
    height: 400px;
  }

  #drawing svg {
    width: 100%;
    height: 100%;
  }

  #drawing svg  g {
    width: 100%;
    height: 100%;
  }
</style>
