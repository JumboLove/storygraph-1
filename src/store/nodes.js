const state = {
  nodes: [
    {
      id: 1,
      x: 100,
      y: 100,
      from: null,
      color: 'green'
    },
    {
      id: 2,
      x: 200,
      y: 100,
      from: 1,
      color: 'blue'
    },
    {
      id: 3,
      x: 300,
      y: 150,
      from: 2,
      color: 'red'
    },
    {
      id: 4,
      x: 400,
      y: 50,
      from: 3,
      color: 'rebeccapurple'
    },
    {
      id: 5,
      x: 500,
      y: 100,
      from: 4,
      color: 'turquoise'
    }
  ]
}

const getters = {
  all: state => {
    return state.nodes
  },
  byID: state => (id) => {
    return state.nodes.find(node => node.id === id)
  }
}

const mutations = {

}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
