<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import QuizHeader from "@/components/QuizHeader.vue";
import QuizContent from "@/components/QuizContent.vue";
import Quizes from "../data/quis.json";
import QuizResult from "@/components/QuizResult.vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = Quizes.find((quiz) => quiz.id === quizId);
const numberOfCorrectAnswer = ref(0);
const showResult = ref(false);

const currentQuestionIndex = ref(0);
const questionPage = computed(() =>{ return `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`});

const barPercentage = computed(() => {
    return `${(currentQuestionIndex.value + 1) / quiz.questions.length * 100}%`;
})

function onSelectOption(option) {
    if (option.correct) {
        numberOfCorrectAnswer.value++;
    } 

    if (currentQuestionIndex.value === quiz.questions.length - 1) {
        showResult.value = true;
        return;
    }
    currentQuestionIndex.value++;
}
</script>

<template>
    <QuizHeader :questionPage="questionPage" :barPercentage="barPercentage"/>

    <QuizContent v-if="!showResult" :question="quiz.questions[currentQuestionIndex]" @selectOption="onSelectOption"/>

    <QuizResult v-else :quizQuestionsLength="quiz.questions.length" :numberOfCorrectAnswer="numberOfCorrectAnswer"/>
</template>

<style scoped></style>