import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/api'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  plugins: [createPersistedState()],
  mutations: {
    isLoggedIn(state, token) {
      if (localStorage.token === token) {
        state.user = true
      }
    },
    loggedOut(state) {
      if (!localStorage.token) {
        state.user = null
      }
    }
  },
  actions: {
    login({ commit }, user) {
      api
        .login(user)
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('token', data.accessToken)
          commit('isLoggedIn', data.accessToken)
          router.push('/profile')
        })
        .catch(err => console.log(err))
    }
  },
  modules: {}
})
