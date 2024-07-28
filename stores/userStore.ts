import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    login(userData) {
      this.user = userData;
      this.isAuthenticated = true;
    },
    logout() {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
  getters: {
    username: (state) => (state.user ? state.user.username : ''),
  },
  persist: true,
});
