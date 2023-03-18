<script setup>
import UserForm from "@/components/UserForm.vue";

function login(user) {
  // api request
}
</script>

<template>
  <div>
    <UserForm formType="signin" @submit="login" />
    <!--- Login page --->
  </div>
</template>
