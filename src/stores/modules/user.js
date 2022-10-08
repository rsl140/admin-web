import { defineStore } from 'pinia'
export const useUserStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'user',
  state: () => ({
    token: ''
  }),
  getters: {
    getToken() {
      return this.token
    }
  },
  actions: {
    setToken(val) {
      this.token = val
    }
  }
})
