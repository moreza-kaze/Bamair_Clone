<script setup>
import { reactive, ref } from "vue";

const icon = reactive({
  buy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.48-5.788A2 2 0 0 1 6.32 4H17.68a2 2 0 0 1 1.838 1.212L22 11v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zm1-7H4v5h16v-5zM4.176 11h15.648l-2.143-5H6.32l-2.143 5zM6.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>',
  add: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>',
  call: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"/></svg>',
  chart:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z"/></svg>',
  news: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 20V4H4v15a1 1 0 0 0 1 1h11zm3 2H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7h4v9a3 3 0 0 1-3 3zm-1-10v7a1 1 0 0 0 2 0v-7h-2zM6 6h6v6H6V6zm2 2v2h2V8H8zm-2 5h8v2H6v-2zm0 3h8v2H6v-2z"/></svg>',
  info: '<svg enable-background="new 0 0 50 50" class="w-6 h-6" version="1.1" width="40" height="40" viewBox="0 0 50 50" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="none" height="50" width="50"/><polyline fill="none" points="30,14 30,10   35,10 35,6 21,6 21,10 26,10 26,14 " stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="9,27 5,27 5,21   1,21 1,37 5,37 5,31 9,31 " stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><path d="  M45,20v5h-3v-8.157C42,15.826,41.189,15,40.191,15H19.99c-0.479,0-0.941,0.195-1.28,0.542L14,21h-3c-1,0-2,1-2,2v12  c0,1.018,1.002,2,2,2h3l4.712,5.461C19.051,42.806,19.511,43,19.99,43h12.855c0.479,0,0.939-0.194,1.278-0.539l7.346-7.482  c0.341-0.346,0.53-0.814,0.53-1.303V31h3v5h4V20H45z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.0077"/><polygon points="32,28 24,39 27,30 22,30 27,20 32,20 27,28 "/></svg>',
});
const categories = ref([
  [icon.buy, "خرید"],
  [icon.add, "ثبت آگهی"],
  [icon.call, "گوش به زنگ"],
  [icon.chart, "قیمت روز"],
  [icon.news, "خبار"],
  [icon.info, "مشخصات فنی"],
]);
</script>
<template>
  <ul class="w-full flex flex-row flex-wrap justify-between px-2">
    <li
      v-for="(category, index) in categories"
      :key="index"
      class="w-1/3 flex flex-col items-center justify-center mb-4 cursor-pointer"
    >
      <div class="font-bold" v-html="category[0]"></div>
      <div>
        <span class="font-thin text-xs">{{ category[1] }}</span>
      </div>
    </li>
  </ul>
</template>
