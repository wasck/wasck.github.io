<template>
  <UnderConstruction v-if="isUnderConstruction"/>

  <main v-else class="flex justify-center h-screen bg-[#2D2327] text-[#B5C2B7]">
    <Header />
    <div class="flex flex-col h-screen w-full py-20 px-2 overflow-y-auto items-center gap-24">
      <AboutMe class="lg:w-1/2"/>
      <CVTimeline />
      <DevStack class="p-4"/>
    </div>
    <Footer />
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const appConfig = useAppConfig();
const isUnderConstruction = ref(appConfig.underConstruction);
</script>
