<template>
  <div class="home">
    <story-graph></story-graph>
    <div class="spacer"></div>
    <story-graph2>
      <base-line :yPos="baseY"></base-line>
      <base-line :yPos="baseY + 100"></base-line>
      <base-line :yPos="baseY + 200"></base-line>
      <base-line :yPos="baseY - 100"></base-line>
    </story-graph2>
  </div>
</template>

<script>
// @ is an alias to /src
import StoryGraph from '@/components/StoryGraph.vue'
import StoryGraph2 from '@/components/StoryGraph2.vue'
import BaseLine from "@/components/line/BaseLine";

export default {
  name: 'home',
  components: {
    StoryGraph, StoryGraph2, BaseLine
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
