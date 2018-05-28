<template>
  <g class="branchline">

  </g>
</template>

<script>
import { EventBus } from '@/event-bus.js'

export default {
  name: 'BranchLine',
  props: {
    xPos: {
      type: Number,
      default: 300
    },
    yPos: {
      type: Number,
      default: 300
    },
    yEnd: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    this.drawBranchLine()
  },
  created () {

  },
  methods: {
    drawBranchLine () {
      let branchLine = EventBus.storyMain.path().M({x: this.xPos, y: this.yPos}).c(
        {x: 50, y: 0},
        {x: 50, y: -this.yEnd},
        {x: 100, y: -this.yEnd})
      branchLine.fill('none')
      branchLine.stroke({ color: 'green', width: 4, linecap: 'round', linejoin: 'round' })
    }
  }
}
</script>

<style scoped>

</style>
