<template>
  <NuxtLink
    :to="`/blog/${post.id}`"
    class="bg-gray-50 shadow-lg p-4 rounded-lg transition-all hover:scale-105 hover:shadow-xl"
  >
    <h3 class="font-medium">{{ post.title }}</h3>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps(["post"]);
</script>

<style></style>
