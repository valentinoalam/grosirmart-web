<template>
  <div>
    <h1>User Authentication</h1>
    <div v-if="isAuthenticated">
      <p>Welcome, {{ username }}!</p>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <input v-model="usernameInput" placeholder="Username" >
      <button @click="loginUser">Login</button>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '~/stores/userStore';
import { ref } from 'vue';

export default {
  setup() {
    const userStore = useUserStore();
    const usernameInput = ref('');

    const loginUser = () => {
      const userData = { username: usernameInput.value };
      userStore.login(userData);
    };

    return {
      isAuthenticated: userStore.isAuthenticated,
      username: userStore.username,
      logout: userStore.logout,
      usernameInput,
      loginUser,
    };
  },
};
</script>
