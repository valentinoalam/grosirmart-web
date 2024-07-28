<template>
  <div>
    <h2 class="mb-6 text-2xl font-bold">Featured Products</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div
        v-for="product in featuredProducts"
        :key="product.id"
        class="card card-bordered"
      >
        <figure>
          <img
            :src="product.image"
            alt="Product image"
            class="object-cover w-full h-48"
          >
        </figure>
        <div class="card-body">
          <h3 class="card-title">{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p class="mt-2 font-bold text-green-500">${{ product.price }}</p>
          <div class="card-actions">
            <button class="btn btn-primary" @click="addToCart(product)">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredProducts: [],
    };
  },
  async created() {
    this.featuredProducts = await fetch(
      'https://api.example.com/featured-products'
    ).then((res) => res.json());
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
