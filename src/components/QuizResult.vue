<script setup>
import { defineProps } from 'vue';
const { quizQuestionsLength, numberOfCorrectAnswer } = defineProps(['quizQuestionsLength', 'numberOfCorrectAnswer']);
</script>

<template>
    <section class="result">
        <p>Score :</p>
        <h1>{{ numberOfCorrectAnswer }}/{{ quizQuestionsLength }}</h1>
        <RouterLink to="/">Go Home</RouterLink>
    </section>
</template>

<style scoped>

.result {
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 2px;
}

h1 {
    font-size: 80px;
}
</style>