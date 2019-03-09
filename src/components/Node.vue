<template>
  <g class="node">
    <branch-line
      :yPos="fromNode.y"
      :xPos="fromNode.x"
      :yEnd="nodeData.y"
      :color="nodeData.color">
    </branch-line>
  </g>
</template>

<script>
import { mapGetters } from 'vuex'

import BranchLine from '@/components/line/BranchLine'

export default {
  name: 'Node',
  props: {
    nodeData: {
      type: Object
    }
  },
  components: {
    BranchLine
  },
  data () {
    return {
      fromNode: {}
    }
  },
  computed: {
    ...mapGetters({
      'storyMain': 'storyMain',
      'byID': 'nodes/byID'
    })
  },
  mounted () {
    this.drawNode()
    this.connectFrom()
  },
  created () {

  },
  methods: {
    drawNode () {
      let node = this.storyMain.circle(10)
      node.fill(this.nodeData.color)
      node.move(this.nodeData.x, this.nodeData.y)
    },
    connectFrom() {
      if (!this.nodeData.from) { return }

      // draw either a straight line or a branch line
      // TODO this doesn't work
      this.fromNode = this.byID(this.nodeData.from)

      if (this.fromNode.x === this.nodeData.x) {
        console.log('draw straight line')
      } else {
        console.log('draw curved line')
      }
    }
  }
}
</script>

<style scoped>

</style>
