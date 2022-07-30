<script setup>
import { ref } from "vue";
import CarCategory from "./CarCategory.vue";
import CycleCategory from "./CycleCategory.vue";

const category = ref(false);
</script>
<template>
  <div class="relative w-full h-full p-4">
    <div
      class="w-full h-12 border-solid border-2 border-gray-100 rounded-full p-1 flex flex-row items-center justify-around"
    >
      <span
        @click="
          {
            category = false;
          }
        "
        :class="[{ 'text-white bg-black': !category }]"
        class="w-1/2 h-full flex flex-row items-center justify-center rounded-3xl cursor-pointer"
        >خودرو</span
      >
      <span
        @click="
          {
            category = true;
          }
        "
        :class="[{ 'text-white bg-black': category }]"
        class="w-1/2 h-full flex flex-row items-center justify-center rounded-3xl cursor-pointer"
        >موتور سیکلت</span
      >
    </div>
    <div class="pt-10">
      <CarCategory :class="[{ hidden: category }]" />
      <CycleCategory :class="[{ hidden: !category }]" />
    </div>
    <div class="absolute bottom-0 w-full py-5 px-2">
      <div class="w-full h-14 pl-7 mb-4">
        <a
          class="w-full h-full border-solid border-2 border-gray-200 rounded-full flex flex-row items-center justify-between px-5 cursor-pointer"
        >
          <span
            ><svg
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path></svg
          ></span>
          <span>ورود به حساب کاربری</span>
        </a>
      </div>
      <div class="w-full h-14 pl-7">
        <a
          class="w-full h-full bg-bamaIr flex flex-row justify-around items-center py-4 px-9 rounded-full cursor-pointer"
          ><span
            ><svg
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              /></svg></span
          ><span class="font-bold">ثبت آگهی رایگان</span></a
        >
      </div>
    </div>
  </div>
</template>
