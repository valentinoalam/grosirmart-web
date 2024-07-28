<template>
  <div>
    <h1>Inventory Management</h1>
    <div v-for="product in inventory" :key="product.id">
      <p>{{ product.name }} - Stock: {{ product.stock }}</p>
      <button @click="removeProductFromInventory(product.id)">Remove</button>
    </div>
  </div>
</template>

<script>
import { useInventoryStore } from '~/stores/inventoryStore';

export default {
  setup() {
    const inventoryStore = useInventoryStore();

    // Adding some dummy products for demonstration
    inventoryStore.addProductToInventory({ id: 1, name: 'Apple', stock: 100 });
    inventoryStore.addProductToInventory({ id: 2, name: 'Banana', stock: 200 });

    return {
      inventory: inventoryStore.inventory,
      removeProductFromInventory: inventoryStore.removeProductFromInventory,
    };
  },
};
</script>
