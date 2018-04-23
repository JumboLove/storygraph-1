<template>
  <div>
    <h1>Story Graph</h1>
    <svg id="drawing2">
      <base-line :yPos="baseline" :canvas="main"></base-line>

    </svg>
  </div>
</template>

<script>
import * as SVG from 'svg.js'
import * as pathSVG from '@/packages/svg.path.js'

import BaseLine from '@/components/line/BaseLine.vue'

export default {
  name: 'StoryGraph',
  components: {
    BaseLine
  },
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
    // this.drawMainLine()
    this.drawSplit(100, this.baseline, 100)
    this.drawSplit(200, this.baseline, 200)
    this.drawSplit(300, this.baseline, 300)
  },
  created () {
    console.log(this.$svg)
  },
  methods: {
    drawCanvas () {
      this.draw = SVG('drawing2')
      this.main = this.draw.group()
      pathSVG()
      // console.log(this.main)
    },
    drawMainLine () {
      let mainLine = this.main.path().M({x: 0, y: this.baseline}).l({x: 1000, y: 0})
      mainLine.fill('none')
      mainLine.stroke({ color: 'black', width: 4, linecap: 'round', linejoin: 'round' })
    },
    drawSplit (xPos, yPos, yEnd) {
      let splitLine = this.main.path().M({x: xPos, y: yPos}).c(
        {x: 50, y: 0},
        {x: 50, y: -yEnd},
        {x: 100, y: -yEnd})
      splitLine.fill('none')
      splitLine.stroke({ color: 'green', width: 4, linecap: 'round', linejoin: 'round' })
    },
    drawDebugGrid () {
      let pattern = this.draw.pattern(25, 25, function (add) {
        add.line(0, 0, 0, 25).stroke({width: 1, color: '#ccc'})
        add.line(0, 0, 25, 0).stroke({width: 1, color: '#ccc'})
      })

      this.main.rect('100%', '100%').fill(pattern)
    }
  }
}
</script>

<style scoped>
  #drawing2 {
    outline: 1px solid #ccc;
    height: 400px;
  }

  #drawing2 {
    width: 100%;
  }

  #drawing2  g {
    width: 100%;
    height: 100%;
  }
</style>
