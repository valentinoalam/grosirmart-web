<template>
  <img
    :alt="alt"
    :height="height"
    :loading="lazy ? 'lazy' : 'eager'"
    :src="src"
    :sizes="sizes"
    :width="width"
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  alt?: string;
  height: string | number;
  lazy?: boolean;
  sizes?: string;
  width: string | number;
}>();

const { alt, height, lazy, sizes, width } = toRefs(props);
</script>
