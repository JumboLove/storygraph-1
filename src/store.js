import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storyMain: null
  },
  getters: {
    storyMain: state => {
      return state.storyMain
    }
  },
  mutations: {
    setStory (state, storySVG) {
      state.storyMain = storySVG
    }
  },
  actions: {
    initStory ({commit}, storySVG) {
      commit('setStory', storySVG)
    }
  }
})
