<template>
  <div class="quote-gallery">
    <h3>Welcome to the hall of the most uncommon fun facts !</h3>
    <button @click="getChuckQuote">Get Quote</button>
    <ChuckQuote v-for="quote in quotes" :key="quote.id" :quote="quote" />

    <!-- J'ai voulu créer une fonction permettant d'affficher des quotes 
      selon des catégories seulement l'API ne propose plus 
      ce service je présenterai ce problème dans la vidéo -->
    <!-- <button @click="changeCategory">Get Quote</button> -->
    <!-- <select v-model="selectedCategory" @change="changeCategory">
      <option value="random">Random Quotes</option>
      <option value="animal">Animal Quotes</option>
    </select>
    <div v-if="selectedCategory === 'random'">
      <ChuckQuote v-for="quote in quotes" :key="quote.id" :quote="quote" />
    </div>
    <div v-if="selectedCategory === 'animal'">
      <ChuckQuote v-for="quote in quotes" :key="quote.id" :quote="quote" />
    </div> -->
  </div>
</template>

<script>
import ChuckQuote from "./ChuckQuote.vue";
import getChuckNorrisQuote from "@/service/ChuckNorrisAPI";

export default {
  name: "ChuckQuoteGallery",

  components: {
    ChuckQuote,
  },

  data() {
    return {
      quotes: [],
      // selectedCategory: "random",
    };
  },

  methods: {
    async getChuckQuote() {
      const quote = await getChuckNorrisQuote();
      this.quotes.push(quote);
    },

    // async changeCategory(selectedCategory) {
    //   if (selectedCategory === "random") {
    //     const quote = await getChuckNorrisQuote();
    //     this.quotes.push(quote);
    //   } else {
    //     const quote = await getChuckNorrisCategoryQuote(selectedCategory);
    //     this.quotes.push(quote);
    //   }
    // },
  },
};
</script>

<style></style>
