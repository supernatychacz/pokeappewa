<template>
  <RouterLink :to="`/pokemons/${pokemon.name}`">
    <div
      class="flex items-center space-x-6 w-full p-2 border border-gray-200 cursor-pointer rounded-md"
    >
      <div
        :class="types.indexOf(pokemon.type1) == -1 ? 'default' : pokemon.type1"
        class="w-3 h-3 rounded-full"
      ></div>
      <span>{{ pokemon.name }}</span>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";
defineProps({
  pokemon: {
    type: Object,
  },
});

const types = ["grass", "fire", "water", "normal"];
</script>
<style scoped>
.grass {
  @apply bg-green-500;
}
.fire {
  @apply bg-red-500;
}
.water {
  @apply bg-blue-500;
}
.normal {
  @apply bg-gray-500;
}
.default {
  @apply bg-black;
}
</style>
