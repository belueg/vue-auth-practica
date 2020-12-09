import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from '@/api/api'
Vue.config.productionTip = false

Vue.prototype.$api = api

Vue.use(Buefy)
Vue.use(VueAxios, axios)

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// Hay app? (VUE INSTANCE)
console.log('hay app? ', !!app)
// HAY TOKEN?
console.log('hay token en localStorage?', !!localStorage.token)
if (app && localStorage.token) {
  store.dispatch('getUserData')
}
