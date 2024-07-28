<template>
  <div class="container mx-auto">
    <h1 class="my-10 text-4xl font-bold text-center">
      Welcome to Our Grocery Wholesale
    </h1>
    <!-- Page Wrapper -->
    <div id="background-div" class="bg-cover page-holder">
      <div class="container py-5">
        <header class="py-5 text-left text-white">
          <h3 class="mb-4 rounded">
            <a
              id="heading"
              href="#start-shopping"
              class="px-2 py-2 bg-white rounded"
              >Start Shopping</a
            >
          </h3>
          <p id="content" class="p-1 mb-0 rounded lead bg-dark">
            Simple Coding Market is for educational purposes only. It can be
            used by developers to learn about developing an ecommerce
            application complete with backend and frontend for Web and Android
          </p>
        </header>
      </div>
    </div>
    <div id="start-shopping" class="container">
      <div class="row">
        <div class="text-left col-12">
          <h2 class="pt-3">Top Categories</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in category_size"
          :key="index"
          class="pt-3 col-md-6 col-xl-4 col-12 justify-content-around d-flex"
        >
          <CategoryBox :category="categories[index - 1]"/>
        </div>
      </div>
    </div>

    <hr >
    <div class="container">
      <div class="row">
        <div class="text-left col-12">
          <h2 class="pt-3">Top Products</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in product_size"
          :key="index"
          class="pt-3 col-md-6 col-xl-4 col-12 justify-content-around d-flex"
        >
          <ProductBox :product="products[index - 1]"/>
        </div>
      </div>
    </div>
    <FeaturedProducts />
    <Categories />
  </div>
</template>

<script>
// import FeaturedProducts from '@/components/FeaturedProducts.vue';

export default {
  name: 'Home',
  data() {
    return {
      category_size: 0,
      product_size: 0,
    };
  },
  // mounted() {
  //   this.category_size = this.categories.length;
  //   this.category_size = Math.min(6, this.category_size);

  //   this.product_size = this.products.length;
  //   this.product_size = Math.min(8, this.product_size);
  // },
};
</script>


<style scoped>
.page-holder {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover !important;
}

#background-div {
  background: url(../assets/home.png);
}

#heading {
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  opacity: 0.8;
  font-family: 'Josefin Sans', sans-serif;
}

#content {
  opacity: 0.8;
}

h2 {
  font-family: 'Josefin Sans', sans-serif;
}
</style>
