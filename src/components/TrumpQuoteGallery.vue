<template>
  <div class="quote-gallery">
    <h3>Welcome to the hall of shame!</h3>
    <button @click="sortQuotesByLength">Sort by Length</button>
    <button @click="getTrumpQuote">Get Quote</button>
    <TrumpQuote v-for="quote in quotes" :key="quote.id" :quote="quote" />
  </div>
</template>

<script>
import TrumpQuote from "./TrumpQuote.vue";
import getDonaldTrumpQuote from "@/service/DonaldTrumpAPI";

export default {
  name: "TrumpQuoteGallery",

  components: {
    TrumpQuote,
  },

  data() {
    return {
      quotes: [],
      sortOrder: "asc",
    };
  },

  methods: {
    async getTrumpQuote() {
      const quote = await getDonaldTrumpQuote();
      this.quotes.push(quote);
    },

    sortQuotesByLength() {
      this.quotes.sort((a, b) => {
        const aLength = a.length;
        const bLength = b.length;
        if (aLength < bLength) {
          return -1;
        } else if (aLength > bLength) {
          return 1;
        } else {
          return 0;
        }
      });

      if (this.sortOrder === "desc") {
        this.quotes.reverse();
      }

      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    },
  },
};
</script>

<style></style>
