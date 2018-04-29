import Vue from 'vue'
export const EventBus = new Vue({
  data() {
    return {
      storyMain: null
    }
  },
  methods: {
    initStory(storySVG) {
      this.storyMain = storySVG
      this.$emit('storyInitialized')
      console.log(storySVG)
    }
  }
})
