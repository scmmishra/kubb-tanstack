<script setup lang="ts">
// import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
