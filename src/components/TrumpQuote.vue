<template>
  <div class="card">
    <div class="card-content">
      <h2 class="quote">{{ quote }}</h2>
      <p class="author">{{ author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrumpQuote",
  props: {
    quote: { type: String, required: true },
    author: { type: String },
  },
};
</script>

<style>
.card {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.card-content {
  text-align: center;
}

.quote {
  font-size: 18px;
  margin-bottom: 10px;
}

.author {
  font-size: 14px;
  color: #888;
}
</style>
