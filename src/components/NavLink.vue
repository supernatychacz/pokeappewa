<template>
    <RouterLink class="text-gray-50 text-lg font-semibold" :to="href" v-bind="$attrs"> 
        <slot />
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    href: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>

</style>