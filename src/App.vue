<script setup>
import { ref } from "vue";

import srcQuiz from "./data/quis.json";

const quizes = ref(srcQuiz);
console.log(quizes);

</script>

<template>
  <main>
    <header>
      <h1 id="title">Quizzler</h1>
      <input type="text" id="search-input" placeholder="Search...">
    </header>

    <section id="quiz-container">

      <!-- card 1 -->
      <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="Programming">
        <div class="card-body">
          <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.questions.length }} Question</p>
        </div>
      </div>

    </section>
  </main>
</template>

<style>
  main {
    max-width: 900px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }

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

  .card {
    width: 270px;
    margin-right: 30px;
    margin-bottom: 30px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin: 0;
  }

  .card-body {
    padding: 5px 15px;
  }

  .card-body h2 {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }
</style>