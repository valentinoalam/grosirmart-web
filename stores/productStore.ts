import { defineStore } from 'pinia';

interface Product {
  id: string;
  price: number;
  // add other product properties as needed
}

interface State {
  products: Product[];
  cart: Product[];
  selectedVariantId: string;
}

export const useProductStore = defineStore<'productStore', State>({
  id: 'productStore',
  state: (): State => ({
    products: [],
    cart: [],
    selectedVariantId: '',
  }),
  actions: {
    async setSelectedVariantId(productId: string) {
      this.selectedVariantId = productId;
    },
    addProduct(product: Product) {
      this.products.push(product);
    },
    addToCart(product: Product) {
      this.cart.push(product);
    },
    removeFromCart(productId: string) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
  },
  getters: {
    cartItemCount: (state: State) => state.cart.length,
    totalCartValue: (state: State) =>
      state.cart.reduce((total, item) => total + item.price, 0),
  },
  persist: true,
});
