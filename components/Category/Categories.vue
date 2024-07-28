<template>
  <div>
    <h2 class="mb-6 text-2xl font-bold">Categories</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div
        v-for="category in categories"
        :key="category.id"
        class="card card-bordered"
      >
        <div class="card-body">
          <h3 class="card-title">{{ category.name }}</h3>
          <p>{{ category.description }}</p>
          <div class="card-actions">
            <nuxt-link :to="`/category/${category.id}`" class="btn btn-primary"
              >Shop Now</nuxt-link
            >
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
      categories: [],
    };
  },
  // async created() {
  //   this.categories = await fetch('https://api.example.com/categories').then(
  //     (res) => res.json()
  //   );
  // },
};
</script>

<style scoped>
/* Custom styles here */
</style>
