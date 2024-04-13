<template>
  <div>
    <div class="opacity-50 text-center" v-if="!post">
      <h2>Nothing found...</h2>
    </div>
    <div v-else class="flex flex-col gap-4">
      <h1>{{ post.title }}</h1>
      <div>
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const post = ref(null);
const fetchPost = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
  );
  const json = await response.json();
  post.value = json;
};

onMounted(() => {
  fetchPost();
});

useSeoMeta({
  title: () => `${post?.value?.title} :: Terminal`,
});
</script>

<style></style>
