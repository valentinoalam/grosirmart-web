<template>
  <button
    class="flex items-center"
    aria-label="Menu"
    @click="handleClick"
    @keyup.enter="handleClick"
  >
    <Bars4Icon class="w-6" aria-hidden />
  </button>
</template>

<script setup lang="ts">
import { Bars4Icon } from '@heroicons/vue/24/outline';
import { useShopStore } from '~/stores/shop';

const shopStore = useShopStore();

function handleClick() {
  shopStore.toggleMenu();
}
</script>
