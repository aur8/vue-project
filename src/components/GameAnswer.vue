<template>
  <div class="answer-quote">
    <div>
      <h2 class="answer">{{ answer }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameAnswer",
  props: {
    answer: { type: String },
  },
};
</script>

<style>
.RandomQuote {
  display: flex;
}

h2 {
  font-size: 20px;
  text-align: center;
}
</style>
