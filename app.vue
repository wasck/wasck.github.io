<template>
  <main>
    <UnderConstruction v-if="isUnderConstruction"/>
    <div v-else>
      Not under construction
    </div>
    
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const appConfig = useAppConfig();
const isUnderConstruction = ref(appConfig.underConstruction);
</script>
