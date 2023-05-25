<template>
  <div>
    <myHeader />
  </div>

  <div>
    <RandomGame />
  </div>

  <div>
    <ToggleGallery />
  </div>

  <div>
    <myFooter />
  </div>
</template>

<script>
import myHeader from "./components/myHeader.vue";
import myFooter from "./components/myFooter.vue";
import ToggleGallery from "./components/ToggleGallery.vue";
import RandomGame from "./components/RandomGame.vue";

export default {
  components: {
    myHeader,
    myFooter,
    ToggleGallery,
    RandomGame,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
