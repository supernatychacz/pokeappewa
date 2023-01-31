<template>
  <div>
    <Header />
    <Layout>
      <!-- router view component will be rendered in the <slot /> inside Layout component -->
      <RouterView />
    </Layout>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import { RouterView } from "vue-router";
// lazy load the Header component
const Header = defineAsyncComponent(() => import("./components/Header.vue"));
// lazy load the Layout component
const Layout = defineAsyncComponent(() => import("./components/Layout.vue"));
</script>

<style scoped></style>
