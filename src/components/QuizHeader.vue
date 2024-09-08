<script setup>
import { defineProps } from "vue";
const { questionPage, barPercentage } = defineProps(["questionPage", "barPercentage"]);

console.log(barPercentage);

</script>


<template>
  <header>
    <h4>Question {{ questionPage }}</h4>
    <div class="bar">
      <div class="bar-progres" :style="{width: barPercentage}"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-top: 20px;
}

header h4 {
  font-size: 30px;
}

.bar {
  width: 100%;
  height: 50px;
  border: 3px solid #1e9dff;
  border-radius: 10px;
}

.bar-progres {
  width: 0;
  height: 100%;
  background-color: #1e9dff;
}
</style>