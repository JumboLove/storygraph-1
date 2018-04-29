<template>
  <div>
    <h1>Story Graph</h1>
    <svg id="story-graph-2">
      <slot></slot>
    </svg>
  </div>
</template>

<script>
// import BaseLine from "@/components/line/BaseLine";
import { EventBus } from '@/event-bus.js'

export default {
  name: 'StoryGraph2',
  // components: { BaseLine },
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
  created () {
    console.log(this.$svg)
  },
  methods: {
    drawCanvas () {
      this.draw = this.$svg('story-graph-2')
      this.main = this.draw.group()
      // Object.defineProperty(this, '$svgMain', { value: this.main })
      // EventBus.$emit('storyGraphInit', this.main)
      EventBus.initStory(this.main)
    }
  }
}
</script>

<style scoped>
  #story-graph-2 {
    outline: 1px solid #ccc;
    height: 400px;
  }

  #story-graph-2 {
    width: 100%;
  }

  #story-graph-2  g {
    width: 100%;
    height: 100%;
  }
</style>
