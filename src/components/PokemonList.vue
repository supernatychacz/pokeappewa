<template>
  <div class="flex flex-col space-y-4">
    <Pokemon
      :pokemon="pokemon"
      v-for="(pokemon, index) in pokemons"
      :key="index"
    />
  </div>
</template>

<script setup>
import pokemons from "@/assets/sampledataset.json";
import Pokemon from "./Pokemon.vue";
// mount and then make api call
</script>
