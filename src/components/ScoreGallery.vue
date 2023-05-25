<template>
  <div class="score-gallery">
    <h2>Your score: {{ scoreDisplay }}</h2>
  </div>
</template>

<script>
export default {
  name: "ScoreGallery",

  data() {
    return {
      scoreDisplay: 0,
    };
  },

  mounted() {
    this.scoreDisplay = localStorage.getItem("score");
  },
};
</script>
