// stores/inventoryStore.js
import { defineStore } from 'pinia';

export const useInventoryStore = defineStore('inventoryStore', {
  state: () => ({
    inventory: [],
  }),
  actions: {
    addProductToInventory(product) {
      this.inventory.push(product);
    },
    updateProductStock(productId, newStock) {
      const product = this.inventory.find((item) => item.id === productId);
      if (product) {
        product.stock = newStock;
      }
    },
    removeProductFromInventory(productId) {
      this.inventory = this.inventory.filter((item) => item.id !== productId);
    },
  },
  getters: {
    productCount: (state) => state.inventory.length,
    getProductById: (state) => (id) =>
      state.inventory.find((product) => product.id === id),
    inStockProducts: (state) =>
      state.inventory.filter((product) => product.stock > 0),
  },
  persist: true,
});
