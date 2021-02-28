<template>
    <section>
        <section class="airbean">
            <h1>Airbean</h1>
            <p>This is one of my websites I made in school. Check out the images below or go see the actual code at <a href="https://github.com/jensengbg-johanna-ohrnberg/airBean-by-IronPants" target="_blank">Github</a>.</p>
        </section>
        <AirbeanImages />
        <AirbeanContent />
        <Footer />
    </section>
</template>

<script>
import Footer from "../components/Footer.vue";
import AirbeanContent from "../components/AirbeanContent.vue";
import AirbeanImages from "../components/AirbeanImages.vue";

export default {
  name: "Home",
  components: {
    Footer,
    AirbeanContent,
    AirbeanImages
  }
};
</script>

<style>
    .airbean {
        text-align: center;
    }

    .airbean>h1 {
        margin: 2rem;
        font-family: 'Source Code Pro', monospace;
        color: #000000;
        font-weight: bold;
        font-size: 48px;
    }

    .airbean>p {
        margin: auto;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-size: 16px;
    }

    .airbean>p>a {
        text-decoration: underline;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-size: 16px;
    }

    .airbean>p>a:hover {
        color: #41abe0;
    }

    @media only screen and (max-width: 400px) {
        .airbean>h1 {
            font-size: 32px;
        }
    }

    @media only screen and (max-width: 290px) {
        .airbean>h1 {
            font-size: 24px;
        }
    }
</style>