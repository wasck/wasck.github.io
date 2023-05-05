<template>
  <UnderConstruction v-if="isUnderConstruction"/>

  <main v-else class="flex justify-center h-screen bg-[#2D2327] text-[#B5C2B7]">
    <Header/>
    <div class="h-screen pt-16 px-2 w-3/4 overflow-y-auto">
      <AboutMe />
    </div>
    <Footer/>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const appConfig = useAppConfig();
const isUnderConstruction = ref(appConfig.underConstruction);
</script>
