import axios, { post } from 'axios'

const API_URL = 'http://localhost:4000/'
const POSTS_API = 'http://localhost:3200/'

const apiUsers = () => {
  tokenInterceptor()

  return {
    register: ({ email, password }) =>
      post(API_URL + 'register', { email, password }),

    login: ({ email, password }) =>
      axios.post(API_URL + 'login', { email, password }),

    getPosts: () => axios.get(POSTS_API + 'posts'),

    userData: () => axios.post(POSTS_API + 'tokenInfo')
  }
}

function tokenInterceptor() {
  const { token } = localStorage

  token
    ? (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`)
    : (axios.defaults.headers.common['Authorization'] = null)
}

export default apiUsers
