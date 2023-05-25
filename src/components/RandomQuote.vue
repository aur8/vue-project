<template>
  <div class="random-quote">
    <div>
      <h2 class="quote">{{ quote }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomQuote",
  props: {
    quote: { type: String, required: true },
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
