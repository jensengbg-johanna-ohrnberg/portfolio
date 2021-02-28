<template>
  <section>
        <HomeText />
        <HomeCards />
        <HomeCompetences />
        <Footer />
  </section>
</template>

<script>
import Footer from "../components/Footer.vue"
import HomeCards from "../components/HomeCards.vue"
import HomeText from "../components/HomeText.vue"
import HomeCompetences from "../components/HomeCompetences.vue"

export default {
    name: "Home",
    components: {
        Footer,
        HomeCards,
        HomeText,
        HomeCompetences
    }
};
</script>

<style>
    h1 {
        font-family: 'Source Code Pro', monospace;
        color: #000000;
        font-weight: bold;
        font-size: 48px;
        margin: 2rem;
        text-align: center;
    }

    @media only screen and (max-width: 370px) {
        h1 {
            font-size: 24px;
        }
    }
</style>