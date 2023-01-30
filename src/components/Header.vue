<template>
    <header class="bg-gradient-to-r from-blue-600 to-sky-600 flex md:justify-between md:flex-row flex-col w-full h-16 py-2 px-6 md:items-center overflow-hidden">
        <div>
            <h1 class="text-gray-50 text-2xl font-semibold">Gotta Catch 'Em All!</h1>
        </div>

        <ul class="flex md:items-center md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5 mt-12 md:mt-0">
            <NavLink href="/">Sign In</NavLink>
            <NavLink href="/signup">Sign Up</NavLink>
        </ul>
    </header>
</template>

<script setup>
import {defineAsyncComponent} from 'vue'

// lazy load the NavLink component
const NavLink = defineAsyncComponent(() => import('./NavLink.vue'))
</script>

<style lang="scss" scoped>

</style>