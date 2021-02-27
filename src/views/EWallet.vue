<template>
    <section>
        <section class="e-wallet">
            <h1>E-Wallet</h1>
            <p>This is one of my websites I made in school. Check out the images below or go see the actual code at <a href="https://github.com/jensengbg-johanna-ohrnberg/e-wallet" target="_blank">Github</a>.</p>
        </section>
        <EwalletImages />
        <EwalletContent />
        <Footer />
    </section>
</template>

<script>
import Footer from "../components/Footer.vue";
import EwalletContent from "../components/EwalletContent.vue";
import EwalletImages from "../components/EwalletImages.vue";

export default {
  name: "Home",
  components: {
    Footer,
    EwalletContent,
    EwalletImages
  }
};
</script>

<style>
    .e-wallet {
        text-align: center;
    }

    .e-wallet>h1 {
        margin: 2rem;
        font-family: 'Source Code Pro', monospace;
        color: #000000;
        font-weight: bold;
        font-size: 48px;
    }

    .e-wallet>p {
        margin: auto;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-size: 16px;
    }

    .e-wallet>p>a {
        text-decoration: underline;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-size: 16px;
    }

    .e-wallet>p>a:hover {
        color: #41abe0;
    }
</style>