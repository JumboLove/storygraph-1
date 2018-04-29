<template>
  <div class="home">
    <story-graph-old></story-graph-old>
    <div class="spacer"></div>

    <h1>Story Graph</h1>
    <story-graph>
      <base-line :yPos="baseY" :lineLength="200"></base-line>
      <base-line :yPos="baseY + 100" :lineLength="400"></base-line>
      <base-line :yPos="baseY + 200" :lineLength="800"></base-line>
      <base-line :yPos="baseY - 100" :lineLength="200"></base-line>
    </story-graph>
  </div>
</template>

<script>
// @ is an alias to /src
import StoryGraphOld from '@/components/StoryGraphOld.vue'
import StoryGraph from '@/components/StoryGraph.vue'
import BaseLine from '@/components/line/BaseLine'

export default {
  name: 'home',
  components: {
    StoryGraphOld, StoryGraph, BaseLine
  },
  data () {
    return {
      baseY: 300
    }
  }
}
</script>

<style scoped lang="scss">
  .spacer {
    width: 100%;
    height: 20px;
    margin: 20px 0;
  }
</style>
