import axios from 'axios'

const API_URL = 'http://localhost:4000/'
const POSTS_API = 'http://localhost:3200/'
const apiUsers = {
  register: ({ email, password }) =>
    axios.post(API_URL + 'register', { email, password }),

  login: ({ email, password }) =>
    axios.post(API_URL + 'login', { email, password }),

  getPosts: () => {
    const { token } = localStorage
    return axios.get(POSTS_API + 'posts', {
      headers: { authorization: 'Bearer ' + token }
    })
  }
}

export default apiUsers
