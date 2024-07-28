<template>
  <div class="grid min-h-[100dvh] grid-rows-[auto-1fr-auto]">
    <Header />
    <!-- <Cart /> -->
    <main class="px-4">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import '~/assets/css/tailwind.css';
import { useShopStore } from '~/stores/shop';

// Global Store Actions
useAsyncData('shop', async () => {
  const shopStore = useShopStore();
  return shopStore.getShopGlobals();
});
</script>
