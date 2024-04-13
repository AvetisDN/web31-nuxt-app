<template>
  <div class="flex flex-col gap-4">
    <h1>Blog</h1>
    <div class="h-px bg-gray-300"></div>
    <div class="opacity-50 text-center" v-if="!posts.length">
      <h2>Nothing found...</h2>
    </div>
    <div v-else class="grid grid-cols-2 gap-6">
      <BlogItem v-for="item in posts" :key="item.id" :post="item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Terminal :: Blog",
});

const posts = ref([]);
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  posts.value = json.slice(0, 10);
};

onMounted(() => {
  fetchPosts();
});
</script>

<style></style>
