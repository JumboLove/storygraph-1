<template>
  <div class="home">

    <story-graph></story-graph>
  </div>
</template>

<script>
// @ is an alias to /src
import StoryGraph from '@/components/StoryGraph.vue'

export default {
  name: 'home',
  components: {
    StoryGraph
  }
}
</script>
