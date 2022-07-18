<script setup>
import MobileSidebar from "./MobileSidebar.vue";
</script>
<template>
  <div class="relative h-full w-full bg-[#000000a6]">
    <div class="w-4/6 h-full max-w-xs bg-white">
      <MobileSidebar />
    </div>
    <div
      @click="$emit('emitMenu', true)"
      class="absolute top-0 left-0 h-full w-2/6"
    >
      <span
        class="absolute top-10 left-14 w-10 h-10 bg-gray-500 rounded-xl flex justify-center items-center text-white cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
  </div>
</template>
