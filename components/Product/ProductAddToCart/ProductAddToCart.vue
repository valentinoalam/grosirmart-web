<template>
  <button
    :disabled="!selectedVariantId"
    class="w-full p-4 text-center text-white bg-black disabled:opacity-75"
    @click="addToCart"
    @keyup.enter="addToCart"
  >
    <span>{{ currentLabel }}</span>
  </button>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/productStore';
import { useCartStore } from '~/stores/cart';

const productStore = useProductStore();
const cartStore = useCartStore();

const labelActive = 'Add to Cart';
const labelDisabled = 'Select Variant';
const selectedVariantId = computed(() => productStore.selectedVariantId);
const currentLabel = computed(() =>
  selectedVariantId.value ? labelActive : labelDisabled
);

const addToCart = () => {
  if (!selectedVariantId.value) {
    // TO-DO: Handle unselected variant
    return;
  }
  cartStore.cartLinesAdd(selectedVariantId.value);
  productStore.setSelectedVariantId('');
};
</script>
