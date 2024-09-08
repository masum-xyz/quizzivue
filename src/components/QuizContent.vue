<script setup>
import { defineProps } from 'vue';
const emit = defineEmits(['selectOption']);
const { question } = defineProps(['question']);

const emitSelectOption = (option) => {
  emit('selectOption', option);
};

</script>

<template>
  <section id="question-container">
    <h1 class="question-title">{{ question.text }}</h1>
  </section>
  <section id="options-container">
    <div class="option" v-for="option in question.answers" :key="option.id" @click="emitSelectOption(option)">
      <p class="option-label">{{ option.label }}</p>
      <p class="option-value">{{ option.text }}</p>
    </div>
  </section>
</template>

<style scoped>
#options-container {
  margin-top: 20px;
}

.question-title {
  font-size: 30px;
  margin-bottom: 20px;
}

.option {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

.option-label {
  font-size: 20px;
  font-weight: bold;
  width: 50px;
  height: 47px;
  color: white;
  background-color: #1e9dff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.option-value {
  font-size: 20px;
  margin-left: 10px;
  font-weight: bold;
  background-color: #d8eeff;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 3px;
  padding: 0 0 0 10px;
}
</style>