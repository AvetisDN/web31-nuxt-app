<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Terminal",
  ogTitle: "Terminal",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://www.imgbly.com/ib/i1YpSceHwr.png",
  twitterCard: "summary_large_image",
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  @apply transition-all duration-500;
}
.page-enter-from,
.page-leave-to {
  @apply opacity-0 blur-lg;
}
.page-enter-from {
  @apply translate-x-24;
}
.page-leave-to {
  @apply -translate-x-24;
}
</style>
