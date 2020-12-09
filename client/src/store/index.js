import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api'
import router from '../router'
// import createPersistedState from 'vuex-persistedstate'
import baseUserState from './baseUserState'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      role: null,
      email: null,
      isLoggedIn: false
    }
  },
  mutations: {
    logOut(state) {
      state.user = baseUserState
    },
    setUserData(state, userData) {
      state.user = { ...state.user, ...userData, isLoggedIn: true }
    }
  },
  actions: {
    login({ commit }, user) {
      api()
        .login(user)
        .then(({ data }) => {
          console.log('data', { ...data })
          localStorage.setItem('token', data.accessToken)
          commit('setUserData', { email: data.email, role: data.role })
          router.push('/profile')
        })
        .catch(err => console.log(err))
    },
    getUserData({ commit }) {
      api()
        .userData()
        .then(({ data: { email, role } }) =>
          commit('setUserData', { email, role })
        )
        .catch(err => console.log(err))
    }
  },
  getters: {
    isLoggedIn: state => state.user.isLoggedIn,

    isAdmin: state => state.user.role === 'admin'
  },

  modules: {}
})
