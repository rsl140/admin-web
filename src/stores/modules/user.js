import { defineStore } from 'pinia'
import { login, getInfo, logout } from '@/api/api'
import { setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
export const useUserStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'user',
  state: () => ({
    token: '',
    expires_in: '',
    name: ''
  }),
  getters: {
    getToken() {
      return this.token
    }
  },
  actions: {
    Login(params) {
      return new Promise((resolve, reject) => {
        login(params)
          .then(res => {
            const data = res.data
            this.token = data.access_token
            setToken(data.access_token)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // get user info
    getInfo() {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(response => {
            const { data } = response
            if (!data) {
              return reject('Verification failed, please Login again.')
            }
            const { name } = data
            this.name = name
            resolve(data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // user logout
    logout() {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            removeToken() // must remove  token  first
            resetRouter()
            // commit('RESET_STATE')
            this.$reset()
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // remove token
    resetToken() {
      return new Promise(resolve => {
        removeToken() // must remove  token  first
        // commit('RESET_STATE')
        this.$reset()
        resolve()
      })
    }
  }
})
