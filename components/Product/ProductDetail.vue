<template>
  <div class="flex flex-col md:flex-row">
    <figure class="w-full md:w-1/2">
      <img :src="product.image" alt="Product image" class="object-cover" >
    </figure>
    <div class="flex flex-col justify-between p-4">
      <div>
        <h2 class="mb-4 text-3xl font-bold">{{ product.name }}</h2>
        <p class="mb-4 text-gray-600">{{ product.description }}</p>
        <p class="mb-4 text-2xl font-bold text-green-500">
          ${{ product.price }}
        </p>
      </div>
      <button class="btn btn-primary" @click="addToCart(product)">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    },
  },
};
</script>

<style scoped>
/* Custom styles here */
</style>
