<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Checkout</h2>
    <form @submit.prevent="submitOrder">
      <div class="form-control mb-4">
        <label for="name" class="label">
          <span class="label-text">Name</span>
        </label>
        <input
          type="text"
          id="name"
          v-model="name"
          class="input input-bordered w-full"
        />
      </div>
      <div class="form-control mb-4">
        <label for="email" class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="input input-bordered w-full"
        />
      </div>
      <div class="form-control mb-4">
        <label for="address" class="label">
          <span class="label-text">Address</span>
        </label>
        <input
          type="text"
          id="address"
          v-model="address"
          class="input input-bordered w-full"
        />
      </div>
      <div class="form-control mb-4">
        <label for="payment" class="label">
          <span class="label-text">Payment Method</span>
        </label>
        <select
          id="payment"
          v-model="paymentMethod"
          class="select select-bordered w-full"
        >
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <button type="submit" class="btn btn-success">Place Order</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      address: '',
      paymentMethod: 'credit_card',
    };
  },
  methods: {
    submitOrder() {
      // Handle order submission logic
      alert('Order placed successfully!');
    },
  },
};
</script>

<style scoped>
/* Custom styles here */
</style>
