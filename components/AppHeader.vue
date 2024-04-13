<template>
  <div class="p-4 xl:p-6 bg-gray-100 shadow-lg sticky top-0">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="flex gap-2 items-center">
        <i class="fa-duotone fa-rectangle-terminal text-rose-600 text-4xl"></i>
        <span class="text-2xl font-black font-mono text-gray-600"
          >Terminal</span
        >
      </a>
      <nav class="font-mono font-medium flex gap-4 text-lg main-menu">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
