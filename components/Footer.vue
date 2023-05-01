<template>
  <div class="absolut bottom-0 fixed flex gap-2 h-4 p-3 w-screen items-center justify-around bg-glass ">
    &copy; {{ fullName }} ({{ currentYear }}) </div>
</template>

<script setup>
import { ref } from 'vue';

const firstName = ref('Waldemar');
const lastName = ref('Schik');
const fullName = ref(`${firstName.value} ${lastName.value}`);
const currentYear = ref(new Date().getFullYear());
</script>