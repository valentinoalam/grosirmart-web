<template>
  <div class="container mx-auto">
    <ProductDetail :product="product" />
  </div>
</template>

<script>
import ProductDetail from '@/components/ProductDetail.vue';

export default {
  components: {
    ProductDetail,
  },
  async asyncData({ params }) {
    // Fetch product data from API
    const product = await fetch(
      `https://api.example.com/products/${params.id}`
    ).then((res) => res.json());
    return { product };
  },
};
</script>

<style scoped>
/* Custom styles here */
</style>
