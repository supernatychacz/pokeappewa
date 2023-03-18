<template>
  <div>
    <!-- Pokemons list page -->
    <PokemonList />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const PokemonList = defineAsyncComponent(() =>
  import("@/components/PokemonList.vue")
);
</script>
