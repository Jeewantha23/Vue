<template>
  <nav
    class="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo Section -->
        <div class="flex items-center space-x-3 group cursor-pointer">
          <div
            class="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300"
          ></div>
          <div>
            <h1 class="text-2xl font-bold text-white tracking-tight">
              Student Manager
            </h1>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="flex items-center space-x-4">
          <RouterLink
            to="/"
            class="relative px-6 py-2 text-white font-semibold text-sm rounded-lg overflow-hidden group transition-all duration-300"
            active-class="bg-white/20"
            exact
          >
            <span class="relative z-10">Home</span>
            <div
              class="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            ></div>
          </RouterLink>

          <router-link to="/add-student">
            <button class="bg-blue-500 text-white px-4 py-2 rounded">
              Add Student
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
