<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold text-center my-10">Shopping Cart</h1>
    <Cart />
  </div>
</template>

<script>
import Cart from '@/components/Cart.vue';

export default {
  components: {
    Cart,
  },
};
</script>

<style scoped>
/* Custom styles here */
</style>
