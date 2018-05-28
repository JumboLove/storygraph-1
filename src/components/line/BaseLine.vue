<template>
  <g class="baseline">

  </g>
</template>

<script>
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters([
      'storyMain'
    ])
  },
  mounted () {
    this.drawMainLine()
  },
  created () {

  },
  methods: {
    drawMainLine () {
      let mainLine = this.storyMain.path().M({x: 0, y: this.yPos}).l({x: this.lineLength, y: 0})
      mainLine.fill('none')
      mainLine.stroke({ color: 'black', width: 4, linecap: 'round', linejoin: 'round' })
    }
  }
}
</script>

<style scoped>

</style>
