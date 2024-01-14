<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>

<template>
  <VueQueryDevtools />
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
