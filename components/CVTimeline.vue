<template>
  <div class="flex flex-col gap-4">
    <h1 class="uppercase text-5xl">{{ title }}</h1>

    <div class="flex flex-col gap-4 items-center">
      <div v-for="data in DEV_STACK"
        class="flex flex-col gap-4 p-4 bg-slate-700 rounded-md sm:w-full lg:w-3/5 ">
        <div>
          <h1 class="flex flex-row justify-between text-2xl capitalize">
            <span>{{ data.title }}</span>
            {{ datePipe(data.dateFrom) }} - {{ datePipe(data.dateTo) }}
          </h1>
          <h3 class="text-xs italic text-slate-500 hover:underline hover:cursor-pointer decoration-yellow-200">
            {{ data.subtitle }}
          </h3>
        </div>
        <p>{{ data.text }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CV_DATA from '@/data/cv';
import { CVData } from '@/models/cv-data.model';

const DEV_STACK = ref<Array<CVData>>(CV_DATA);
const title = 'career';

function datePipe(date: Date): string {
  const current = new Date();
  const isToday = 
    date.toISOString().split('T')[0] === current.toISOString().split('T')[0];

  return isToday ? 'today': `${date.getMonth() + 1}/${date.getFullYear()}`;
}

</script>