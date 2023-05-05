<template>
  <div class="flex flex-col gap-5">
    <h1 class="uppercase text-5xl">{{ title }} ({{ DEV_STACK.length }})</h1>
    <div class="grid md:grid-cols-4 lg:grid-cols-7 gap-4">
      <span v-for="stack in DEV_STACK"
        v-bind:key="stack.label"
        class="flex align-middle justify-center bg-slate-700 p-3">
        <a :href="stack.link" target="_blank">
          <img 
            class="object-fit h-20"
            v-if="!!getIconPath(stack.name)"
            :src="getIconPath(stack.name, stack.type)"
            :alt="stack.label"
            :title="stack.label"
            :width="MAX_ICON_SIZE * stack.size">
          <span v-else>{{ stack.label }}</span>
        </a>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import DEV_STACK_DATA from '@/data/dev-stack';
import { DevStack } from '@/models/dev-stack.model';


const MAX_ICON_SIZE = ref<number>(200);
const DEV_STACK = ref<Array<DevStack>>(DEV_STACK_DATA);
const title = 'what I love';

function getIconPath(name: string, type: string = 'svg'): string {
  return `/icons/${name}.${type}`
}
</script>