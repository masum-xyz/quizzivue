<script setup>
import { ref, watch } from "vue";
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
    max-width: 900px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
}
</style>