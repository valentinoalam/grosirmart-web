// stores/orderStore.js
import { defineStore } from 'pinia';

export const useOrderStore = defineStore('orderStore', {
  state: () => ({
    orders: [],
  }),
  actions: {
    placeOrder(order) {
      this.orders.push(order);
    },
    cancelOrder(orderId) {
      this.orders = this.orders.filter((order) => order.id !== orderId);
    },
  },
  getters: {
    orderCount: (state) => state.orders.length,
    getOrderById: (state) => (id) =>
      state.orders.find((order) => order.id === id),
  },
  persist: true,
});
