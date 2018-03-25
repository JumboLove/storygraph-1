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
      draw: null
    }
  },
  mounted () {
    // testing
    this.draw = SVG('drawing').size(300, 300)
    this.draw.rect(100, 100).attr({fill: '#f06'})
    // var path = this.draw.path('M100,250 C263,258 174,146 327,155')
    var path = this.draw.path().M({x: 100, y: 100}).c({x: 0, y: 100}, {x: 100, y: 100}, {x: 100, y: 0})
    path.fill('none')
    path.stroke({ color: '#f06', width: 7, linecap: 'round', linejoin: 'round' })
  }
}
</script>

<style scoped>

</style>
