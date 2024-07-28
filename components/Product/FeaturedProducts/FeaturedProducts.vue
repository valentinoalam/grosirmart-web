<template>
  <div v-if="collection">
    <ProductGrid>
      <div v-if="title" class="col-span-2 font-bold border-b-2 md:col-span-4">
        {{ title }}
      </div>
      <ProductCard
        v-for="(product, index) in collection.products.edges"
        :key="product.node.id"
        :index="index"
        :product="product.node"
      />
    </ProductGrid>
  </div>
  <div v-else-if="error">Error loading featured products</div>
  <div v-else/>
</template>

<script setup lang="ts" generic="T">
import { useQuery } from '@vue/apollo-composable';
import { collectionByHandle } from '~~/apollo/queries/collectionByHandle';

const props = defineProps<{
  collectionHandle: string;
  numberProducts?: number;
  title?: string;
}>();

const handle = props.collectionHandle;
const numProducts = props.numberProducts ?? 4;

const { result, error } = useQuery(collectionByHandle, {
  handle,
  numProducts,
});

const collection = computed(() => result.value?.collectionByHandle);


</script>
