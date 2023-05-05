<template>
  <div class="flex flex-col text-center ">
    <div class="flex sm:flex-col md:flex-col lg:flex-row ">
      <div class="content">
        <h1>
          <span class="uppercase font-bold">{{ fullName }}</span> 
          <span class="uppercase text-slate-500"> | Front-End Web Developer</span>
        </h1>
    
        <div class="flex flex-col gap-8">
          <p>
            Hi there and welcome portfolio page! I'm glad you found your way to my page. As a passionate software developer, I specialize in developing web front-end technologies. I like to work with modern technologies and frameworks and attach great importance to clean and structured code.
          </p>
          <p class="text-slate-500">
            Again, welcome to my site, I hope you can feel comfortable and inspired by me.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const firstName = ref('Waldemar');
const lastName = ref('Schik');
const fullName = ref(`${firstName.value} ${lastName.value}`);
</script>