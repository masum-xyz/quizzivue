<script setup>
const { quiz } = defineProps(["quiz"]);

console.log(quiz);

</script>

<template>
  <div class="card">
    <img :src="quiz.img" :alt="quiz.title" />
    <div class="card-body">
      <h2>{{ quiz.title }}</h2>
      <p>{{ quiz.questions.length }} Question</p>
    </div>
  </div>
</template>

<style scoped>
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