<template>
  <div id="story-graph-wrapper">
    <svg id="story-graph">
      <slot v-if="main"></slot>
    </svg>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js'

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
  },
  methods: {
    drawCanvas () {
      this.draw = this.$svg('story-graph').size(4000, 400) //TODO hard coded size
      this.main = this.draw.group()
      EventBus.initStory(this.main)
    },
    drawDebugGrid () {
      let smallBox = this.draw.pattern(25, 25, function (add) {
        add.line(0, 0, 0, 25).stroke({width: 1, color: '#ccc'})
        add.line(0, 0, 25, 0).stroke({width: 1, color: '#ccc'})
      })

      this.main.rect('100%', '100%').fill(smallBox)

      let bigBox = this.draw.pattern(100, 100, function (add) {
        add.line(0, 0, 0, 100).stroke({width: 1, color: '#a9a9a9'})
        add.line(0, 0, 100, 0).stroke({width: 1, color: '#a9a9a9'})
      })

      this.main.rect('100%', '100%').fill(bigBox)
    }
  }
}
</script>

<style scoped>
  #story-graph-wrapper {
    width: 100%;
    overflow-x: auto;
  }

  #story-graph {
    outline: 1px solid #ccc;
    /* height: 400px; */
    /* width: 100%; */
  }

  /* invalid, g does not have geometry */
  #story-graph > g {
    width: 100%;
    height: 100%;
  }
</style>
