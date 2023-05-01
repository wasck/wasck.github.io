<template>
  <div class="fixed flex gap-2 h-16 p-8 w-screen items-center justify-between drop-shadow-md bg-glass">
    <h1 class="uppercase tracking-[4px] lg:font-bold">Waldemar Schik</h1>

    <ol class="flex flex-row capitalize">
      <a v-href="link.link" v-for="link in links">
        <li class="hover:bg-[#45364B] hover:cursor-pointer rounded-r-md p-2">
          {{ link.label }}
        </li>
      </a>
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const links = ref([
  // { label: 'about me', link: '#' },
  // { label: 'my life', link: '#' },
]);
</script>