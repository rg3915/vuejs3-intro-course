import { createStore } from 'vuex'

export default createStore({
  state: {
    // dados
    user: {
      first_name: 'Jon',
      last_name: 'Snow',
      email: 'jon@snow.com'
    },
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200
      },
      {
        id: 3,
        name: 'Meião',
        price: 50
      }
    ],
    cart: []
  },
  mutations: {
    // Atualiza os dados
    // Não esqueça do comando commit('nome da mutation')
    storeUser(state, data) {
      state.user = data
    },

    addProduct(state, data) {
      state.cart.push(data)
    },

    removeProduct(state, id) {
      const idx = state.cart.findIndex(o => o.id === id)
      state.cart.splice(idx, 1);
    },
  },
  getters: {
    // Equivalente ao computed
    total(state) {
      // dependência
      // retorna um valor
      return state.cart.reduce((total, item) => total += item.price, 0)
    }
  },
  actions: {
    // parece com as mutations
    // no componente você usa dispatch
    // storeUser(context, data) {
    storeUser({ commit }, data) {
      // console.log(context, data)
      // console.log(context.getters.total)

      // context.state.user = data
      // Esta solução não é a ideal

      // Aqui dá pra usar ASYNC! <<<

      // Então

      // ajax simulação
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('storeUser', data);
          resolve()
        }, 1000)
      })

    }
  },
})