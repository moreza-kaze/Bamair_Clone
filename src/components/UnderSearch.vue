<script setup>
import { reactive, ref } from "vue";
const link = reactive({
  karkardeh: "/karkardeh",
  aghsati: "/aghsati",
  sefr: "/asefr",
  auto: "/auto",
  afroad: "/afroad",
  hibrid: "/hibrid",
  classic: "/classic",
  luxe: "/luxe",
  azad: "/azad",
});
const searchCategry = ref([
  [link.karkardeh, "کارکرده"],
  [link.aghsati, "اقساطی"],
  [link.sefr, "صفر"],
  [link.auto, "اتومات"],
  [link.afroad, "افرود"],
  [link.hibrid, "هیبرید"],
  [link.luxe, "لوکس"],
]);
</script>
<template>
  <div class="h-16 w-full flex flex-row justify-center px-2">
    <router-link
      class="h-8 mr-2 p-2 border-solid border-2 border-gray-200 text-xs text-gray-400 rounded-2xl"
      v-for="(cat, index) in searchCategry"
      :key="index"
      :to="cat[0]"
      >{{ cat[1] }}</router-link
    >
  </div>
</template>
