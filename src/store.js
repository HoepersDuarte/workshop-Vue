import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // Estado da aplicação contém os dados que podem ser facilmente acessados por todos os componentes
  state: {
    currentUser: null
  },
  // Servem para retornar / filtrar os dados armazenados no state
  getters: {
    currentUser: (state) => state.currentUser
  },
  // Servem para armazenar / alterar dados na store as mutations devem ser síncronas
  // Recebem como primeiro parâmetro o state e por segundo o payload enviado pela action
  mutations: {
    SET_CURRENT_USER: (state, user) => (state.currentUser = user)
  },
  // As actions são semelhantes às mutações, as diferenças são as seguintes:
  // Em vez de mudar o estado, as actions confirmam (ou fazem commit de) mutações.
  // As actions podem conter operações assíncronas arbitrárias.
  actions: {
    setCurrentUser: ({ commit }, user) => commit('SET_CURRENT_USER', user)
  }
})
