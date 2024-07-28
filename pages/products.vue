<template>
  <div class="container mx-auto">
    <h1 class="my-10 text-4xl font-bold text-center">Our Products</h1>
    <ProductList :products="products" />
  </div>
</template>

<script>
export default {

  async asyncData() {
    const products = await fetch('https://api.example.com/products').then(
      (res) => res.json()
    );
    return { products };
  },
};
</script>

<style scoped>
/* Custom styles here */
</style>
