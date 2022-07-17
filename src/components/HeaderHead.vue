<script setup>
import { ref } from "vue";
import MobileNavbar from "./MobileNavbar.vue";
const menu = ref(true);

function updatmenu(x) {
  menu.value = x;
}
</script>
<template>
  <div
    class="h-16 lg:h-20 relative flex flex-row items-center justify-between xl:px-10 py-5 bg-[#f3f4f2] z-10"
  >
    <nav class="block">
      <ul class="hidden lg:flex flex-row">
        <li class="font-extrabold mr-5">خودرو</li>
        <li class="font-extrabold mr-5">موتور سیکلت</li>
        <li class="font-extrabold mr-5">باما</li>
      </ul>
      <ul class="flex lg:hidden px-5">
        <li
        class="cursor-pointer"
          @click="
            {
              menu = !menu;
            }
          "
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </li>
      </ul>
    </nav>
    <div class="flex flex-row justify-center items-center">
      <div class="ml-4 hidden lg:inline">
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
            /></svg
        ></span>
      </div>
      <a
        class="w-full h-10 ml-5 lg:m-0 lg:h-12 flex items-center px-2 lg:p-2 rounded-full border-solid border-2 border-gray-200 hover:bg-gray-200 cursor-pointer"
      >
        <span
          class="h-6 w-6 lg:h-8 lg:w-8 flex items-center justify-center p-1 rounded-full bg-bamaIr z-10"
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
              d="M12 4v16m8-8H4"
            /></svg
        ></span>
        <span class="font-bold text-black px-2">ثبت آگهی</span>
      </a>
    </div>
    <section
      :class="[{ hidden: menu }]"
      class="min-h-screen h-full w-full fixed top-0 right-0 transition-all z-20"
    >
      <MobileNavbar :menu="menu" @emit-menu="updatmenu" />
    </section>
  </div>
</template>
