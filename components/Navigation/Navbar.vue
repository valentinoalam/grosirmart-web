<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!--    Logo-->
    <div class="flex-1">
      <nuxt-link to="/" class="text-xl normal-case btn btn-ghost"
        >Grocery Wholesale</nuxt-link
      >
    </div>
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <img id="logo" src="../assets/icon.png" >
    </router-link>
    <div class="flex-none">
      <nuxt-link to="/cart" class="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h14l1.4-7H5.4m-2 7H7m0 0L9 20m0 0l1 2m-1-2h6m0 0l-1-2m-5-2h6m0 0L17 20m0 0l1-2M9 9h1m3 0h1m3 0h1"
          />
        </svg>
        <span class="badge badge-sm indicator-item">{{ cartCount }}</span>
      </nuxt-link>
    </div>
    <!--    Burger Button-->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"/>
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <!--      Search Bar-->
      <form class="ml-auto mr-auto form-inline">
        <div class="input-group">
          <input
            size="100"
            type="text"
            class="form-control"
            placeholder="Search Items"
            aria-label="Username"
            aria-describedby="basic-addon1"
          >
          <div class="input-group-prepend">
            <span id="search-button-navbar" class="input-group-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </form>

      <!--      DropDowns-->
      <ul class="ml-auto navbar-nav">
        <li class="nav-item dropdown">
          <a
            id="navbarDropdown"
            class="nav-link text-light dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Browse
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" :to="{ name: 'Home' }"
              >Home</router-link
            >
            <router-link class="dropdown-item" :to="{ name: 'Product' }"
              >Product</router-link
            >
            <router-link class="dropdown-item" :to="{ name: 'Category' }"
              >Category</router-link
            >
          </div>
        </li>

        <li class="nav-item dropdown">
          <a
            id="navbarDropdown"
            class="nav-link text-light dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Accounts
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link
              v-if="!token"
              class="dropdown-item"
              :to="{ name: 'Signin' }"
              >Wishlist</router-link
            >
            <router-link v-else class="dropdown-item" :to="{ name: 'Wishlist' }"
              >Wishlist</router-link
            >
            <router-link class="dropdown-item" :to="{ name: 'Admin' }"
              >Admin</router-link
            >
            <router-link
              v-if="!token"
              class="dropdown-item"
              :to="{ name: 'Signin' }"
              >Log In</router-link
            >
            <router-link
              v-if="!token"
              class="dropdown-item"
              :to="{ name: 'Signup' }"
              >Sign Up</router-link
            >
            <a v-if="token" class="dropdown-item" href="#" @click="signout"
              >Sign Out</a
            >
          </div>
        </li>

        <li class="nav-item">
          <router-link class="nav-link text-light" :to="{ name: 'Order' }"
            >Orders</router-link
          >
        </li>
        <li class="nav-item">
          <div id="cart">
            <span id="nav-cart-count">{{ cartCount }}</span>
            <router-link class="text-light" :to="{ name: 'Cart' }"
              ><i class="fa fa-shopping-cart" style="font-size: 36px"/></router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  // eslint-disable-next-line vue/require-prop-types
  props: ['cartCount'],
  emits: {'resetCartCount': null},
  data() {
    return {
      token: null,
    };
  },
  computed: {
    countCartItems() {
      return this.$store.getters.cartCount;
    },
  },
  mounted() {
    this.token = localStorage.getItem('token');
  },
  methods: {
    signout() {
      localStorage.removeItem('token');
      this.token = null;
      this.$emit('resetCartCount');
      this.$router.push({ name: 'Home' });
      swal({
        text: 'Logged you out. Visit Again',
        icon: 'success',
        closeOnClickOutside: false,
      });
    },
  },
};
</script>

<style scoped>
#logo {
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
}

.nav-link {
  color: rgba(255, 255, 255);
}

#search-button-navbar {
  background-color: #febd69;
  border-color: #febd69;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
#nav-cart-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  font-size: 15px;
  margin-left: 10px;
}
#cart {
  position: relative;
}
</style>
