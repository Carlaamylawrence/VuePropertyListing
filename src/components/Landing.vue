<template>
  <section id="landing">
    <div class="header-container">
      <div class="heading-info d-flex flex-column justify-content-center">
        <h1 class="text-center">Welcome to Homez Connect</h1>
        <h3 class="text-center">
          We are an innovative real estate service trying to bring home dwellers
          to their home of their dreams
        </h3>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>

<style scoped>
#landing {
  background: linear-gradient(
      0deg,
      rgba(54, 54, 54, 0.167),
      rgb(20 20 20 / 74%)
    ),
    url(../assets/pexels-the-lazy-artist-gallery-1642125.jpg);
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}
.header-container {
  color: whitesmoke;
  text-shadow: 2px 1px 1px black;
}

.heading-info {
  padding-top: 24%;
}
</style>
