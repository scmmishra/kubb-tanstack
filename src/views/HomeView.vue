<script setup lang="ts">
import { useFindPetsByStatus } from '@/api/hooks'
import { computed } from 'vue'

const pets = await useFindPetsByStatus(
  { status: 'available' },
  {
    client: {
      baseURL: 'https://petstore3.swagger.io/api/v3/'
    }
  }
)

const allPets = computed(() => pets.data.value)
</script>

<template>
  <main class="text-gray-900">
    <h1>All Pets</h1>
    <pre>{{ allPets }}</pre>
  </main>
</template>
