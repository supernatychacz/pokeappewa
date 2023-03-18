<template>
  <form class="flex flex-col mt-10 space-y-7" @sumbit.prevent="submitForm">
    <div v-if="formType == 'signup'" class="form-group">
      <label for="" class="label">Full name</label>
      <input
        type="text"
        name="fullname"
        v-model="user.fullname"
        class="input"
      />
    </div>
    <div class="form-group">
      <label for="" class="label">Email</label>
      <input type="text" name="email" v-model="user.email" class="input" />
    </div>
    <div class="form-group">
      <label for="" class="label">Password</label>
      <input
        type="text"
        name="password"
        v-model="user.password"
        class="input"
      />
    </div>

    <button class="button">
      {{ formType == "signup" ? "Sign Up" : "Sign In" }}
    </button>
  </form>
</template>

<script setup>
import { reactive } from "vue";

defineProps({
  formType: {
    type: String,
    default: "signup",
  },
});

const emit = defineEmits(["submit"]);

function submitForm() {
  emit("submit", user);
}

const user = reactive({
  fullname: "",
  email: "",
  password: "",
});
</script>

<style scoped>
.input {
  @apply border border-gray-200 p-2 rounded-md w-full;
}
.label {
  @apply text-lg text-gray-700 font-semibold;
}
.button {
  @apply bg-purple-500 text-gray-50 px-4 py-2 rounded;
}
.form-group {
  @apply flex flex-col space-y-4;
}
</style>
