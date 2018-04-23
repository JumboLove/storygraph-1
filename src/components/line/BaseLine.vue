<template>
  <g class="baseline">

  </g>
</template>

<script>
import * as SVG from 'svg.js'
import '@/packages/svg.path.js'

export default {
  name: 'BaseLine',
  props: {
    yPos: Number,
    canvas: Object
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  created () {
    this.drawMainLine()
  },
  methods: {
    drawMainLine () {
      let mainLine = this.canvas.path().M({x: 0, y: this.yPos}).l({x: 1000, y: 0})
      mainLine.fill('none')
      mainLine.stroke({ color: 'black', width: 4, linecap: 'round', linejoin: 'round' })
    }
  }
}
</script>

<style scoped>

</style>
