<template>
  <g class="baseline">

  </g>
</template>

<script>
import { EventBus } from '@/event-bus.js'

export default {
  name: 'BaseLine',
  props: {
    yPos: {
      type: Number,
      default: 300
    },
    lineLength: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    this.drawMainLine()
  },
  created () {

  },
  methods: {
    drawMainLine () {
      let mainLine = EventBus.storyMain.path().M({x: 0, y: this.yPos}).l({x: this.lineLength, y: 0})
      mainLine.fill('none')
      mainLine.stroke({ color: 'black', width: 4, linecap: 'round', linejoin: 'round' })
    }
  }
}
</script>

<style scoped>

</style>
