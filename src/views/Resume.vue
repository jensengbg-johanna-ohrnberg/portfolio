<template>
    <section>
        <h1 class="cv-title">Resume</h1>
        <Cv />
        <Footer />
    </section>
</template>

<script>
import Footer from "../components/Footer.vue"
import Cv from "../components/Cv.vue"

export default {
  name: "Home",
  components: {
    Footer,
    Cv
  }
};
</script>

<style>
  .cv-title {
    text-align: center;
    margin: 2rem;
    font-family: 'Source Code Pro', monospace;
    color: #000000;
    font-weight: bold;
    font-size: 48px;
}
</style>