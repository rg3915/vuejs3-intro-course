import { createStore } from 'vuex'

export default createStore({
  state: {
    // dados
    user: {
      first_name: 'Jon',
      last_name: 'Snow',
      email: 'jon@snow.com'
    },
    products: [],
    cart: []
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
})