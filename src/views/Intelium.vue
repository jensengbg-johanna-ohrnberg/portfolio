<template>
    <section>
        <section class="intelium">
            <h1>Intelium Engineering AB</h1>
            <p>This is one of my websites I made for my internship. Check out the images below or visit the actual website at <a href="http://www.intelium.se/" target="_blank">www.intelium.se</a>.</p>
        </section>
        <InteliumImages />
        <InteliumContent />
        <Footer />
    </section>
</template>

<script>
import Footer from "../components/Footer.vue";
import InteliumContent from "../components/InteliumContent.vue";
import InteliumImages from "../components/InteliumImages.vue";

export default {
  name: "Home",
  components: {
    Footer,
    InteliumContent,
    InteliumImages
  }
};
</script>

<style lang="scss">
    .intelium>h1 {
        text-align: center;
        margin: 2rem;
        font-family: 'Source Code Pro', monospace;
        color: #000000;
        font-weight: bold;
        font-size: 48px;
    }

    .intelium>p {
        text-align: center;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-size: 16px;
        margin: auto;
    }

    .intelium>p>a {
        text-decoration: underline;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-size: 16px;
    }

    .intelium>p>a:hover {
        color: #41abe0;
    }

    @media only screen and (max-width: 400px) {
        .intelium>h1 {
            font-size: 32px;
        }
    }

    @media only screen and (max-width: 290px) {
        .intelium>h1 {
            font-size: 24px;
        }
    }
</style>