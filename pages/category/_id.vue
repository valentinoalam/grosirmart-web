<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold text-center my-10">{{ category.name }}</h1>
    <ProductList :products="products" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    ProductList,
  },
  async asyncData({ params }) {
    const category = await fetch(
      `https://api.example.com/categories/${params.id}`
    ).then((res) => res.json());
    const products = await fetch(
      `https://api.example.com/categories/${params.id}/products`
    ).then((res) => res.json());
    return { category, products };
  },
};
</script>

<style scoped>
/* Custom styles here */
</style>
