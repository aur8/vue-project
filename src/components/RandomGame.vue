<template>
  <div class="random-gallery">
    <div>
      <h1>Let's play a game!</h1>
      <button @click="getRandomQuote">Get Quote</button>
      <RandomQuote v-if="RandomQuote" :quote="RandomQuote" />
    </div>
    <div>
      <input type="text" v-model="answer" />
      <button @click="checkAnswer">Get Answer</button>
      <GameAnswer v-if="showResult" :answer="result" />
    </div>
    <div>
      <p>Score : {{ score }}</p>
      <button @click="resetScore">Reset Score</button>
    </div>
  </div>
</template>

<script>
import GameAnswer from "./GameAnswer.vue";
import RandomQuote from "./RandomQuote.vue";
import getChuckNorrisQuote from "@/service/ChuckNorrisAPI";
import getDonaldTrumpQuote from "@/service/DonaldTrumpAPI";

export default {
  name: "RandomGame",

  components: {
    RandomQuote,
    GameAnswer,
  },

  data() {
    return {
      RandomQuote: "",
      RandomAuthor: "",
      result: "",
      answer: "",
      showResult: false,
      score: 0,
    };
  },

  methods: {
    async getRandomQuote() {
      this.score = parseInt(localStorage.getItem("score")) || 0; // Ajout de cette ligne pour initialiser le score
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        this.RandomQuote = await getDonaldTrumpQuote();
        this.RandomAuthor = "Donald Trump";
      } else {
        this.RandomQuote = await getChuckNorrisQuote();
        this.RandomAuthor = "Chuck Norris";
      }
    },

    checkAnswer() {
      const author = this.RandomAuthor;
      const answer = this.answer.trim();
      if (answer.toLowerCase() === author.toLowerCase()) {
        this.result = "Correct!";
        this.score += 1;
        localStorage.setItem("score", this.score);
      } else {
        this.result = `Wrong! It was said by ${author}`;
      }
      this.showResult = true;
    },

    resetScore() {
      this.score = 0;
    },
  },

  mounted() {
    this.getRandomQuote();
  },
};
</script>
