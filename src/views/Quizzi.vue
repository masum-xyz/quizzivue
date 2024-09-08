<script setup>
import { ref, watch } from "vue";

import srcQuiz from "../data/quis.json";

import QuizCard from "../components/QuizCard.vue";

// data questions
const quizes = ref(srcQuiz);

// searching
const search = ref("");
watch(search, () => {
    quizes.value = srcQuiz.filter((quiz) =>
        quiz.title.toLowerCase().includes(search.value.toLowerCase())
    );
});

</script>

<template>
        <header>
            <h1 id="title">QuizziVue</h1>
            <input v-model.trim="search" type="text" id="search-input" placeholder="Search...">
        </header>

        <section id="quiz-container">

            <!-- card 1 -->
            <!-- <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="Programming">
        <div class="card-body">
          <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.questions.length }} Question</p>
        </div>
      </div> -->

            <QuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />

        </section>
</template>

<style>


header {
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#title {
    margin-right: 20px;
    font-weight: bold;
    color: #1e9dff;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

#search-input {
    border: none;
    background-color: #f2f2f2;
    padding: 5px;
    border-radius: 5px;
}

#quiz-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
}
</style>