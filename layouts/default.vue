<template>
  <div
    class="min-h-screen bg-gray-100 text-gray-800 flex flex-col gap-6 xl:gap-7"
  >
    <AppHeader />
    <main class="container mx-auto grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
