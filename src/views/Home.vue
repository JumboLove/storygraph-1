<template>
  <div class="home">

    <story-graph></story-graph>

    <div class="spacer"></div>

    <story-graph2></story-graph2>
  </div>
</template>

<script>
// @ is an alias to /src
import StoryGraph from '@/components/StoryGraph.vue'
import StoryGraph2 from '@/components/StoryGraph2.vue'

export default {
  name: 'home',
  components: {
    StoryGraph, StoryGraph2
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
