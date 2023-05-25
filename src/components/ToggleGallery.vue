<template>
  <div>
    <h1>The gallery of your favorite quotes !</h1>
    <!-- <button @click="toggleGallery">Switch of quote author</button>
    <div v-if="showTrumpGallery">
      <TrumpQuoteGallery />
    </div>
    <div v-else>
      <ChuckQuoteGallery />
    </div> -->

    <select v-model="selectedCategory" @change="changeCategory">
      <option value="trump">Trump Quotes</option>
      <option value="chuck">Chuck Norris Quotes</option>
    </select>

    <div v-if="selectedCategory === 'trump'">
      <TrumpQuoteGallery />
    </div>
    <div v-else-if="selectedCategory === 'chuck'">
      <ChuckQuoteGallery />
    </div>
  </div>
</template>

<script>
import TrumpQuoteGallery from "./TrumpQuoteGallery.vue";
import ChuckQuoteGallery from "./ChuckQuoteGallery.vue";

export default {
  name: "ToggleGallery",

  components: {
    TrumpQuoteGallery,
    ChuckQuoteGallery,
  },
  data() {
    return {
      showTrumpGallery: true,
      selectedCategory: "trump",
    };
  },
  methods: {
    changeCategory() {
      this.showTrumpGallery = !this.showTrumpGallery;
    },
  },
};
</script>

<style scoped></style>
