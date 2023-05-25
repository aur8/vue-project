<template>
  <div class="myHeader">
    <header>
      <img
        class="responsive-image"
        src="../assets/header_image.jpg"
        alt="myHeader"
      />
      <h1 class="title">Trump VS Chuck ! Who said it?</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "myHeader",
};
</script>

<style scoped>
.myHeader {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 45px;
  font-weight: bold;
}

@media (max-width: 768px) {
  /* Ajuster la taille du texte pour les écrans plus petits */
  .title {
    font-size: 30px;
  }
}

@media (max-width: 480px) {
  /* Ajuster la taille du texte pour les écrans encore plus petits */
  .title {
    font-size: 20px;
  }
}

.responsive-image {
  max-width: 100%;
  height: auto;
}

.responsive-image {
  width: 100%;
  height: auto;
}
</style>
