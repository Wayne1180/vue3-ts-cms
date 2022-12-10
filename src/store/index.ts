import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './Login/Login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'Wayne',
      age: 18
    }
  },
  getters: {},
  mutations: {
    changeName(state) {
      state
    }
  },
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
