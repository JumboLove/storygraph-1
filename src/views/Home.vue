<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <story-graph></story-graph>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import StoryGraph from '@/components/StoryGraph.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    StoryGraph
  }
}
</script>
