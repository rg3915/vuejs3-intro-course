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
    // Atualiza os dados
    // Não esqueça do comando commit('nome da mutation')
    storeUser(state, data) {
      state.user = data
    }
  },
  actions: {
  },
  getters: {
  },
})