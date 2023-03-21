<template>
  <div>
    <UserForm formType="signup" @submit="login" />
    <!-- Sign up page -->
  </div>
</template>

<script setup>
import UserForm from "@/components/UserForm.vue";

function login(user) {
  // api request
}
</script>
