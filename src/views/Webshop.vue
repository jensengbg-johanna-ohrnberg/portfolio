<template>
    <section>
        <section class="webshop">
            <h1>Webshop</h1>
            <p>This is one of my websites I made in school. Check out the images below or go see the actual code at <a href="https://github.com/jensengbg-johanna-ohrnberg/webshop-grp-tdd" target="_blank">Github</a>.</p>
        </section>
        <WebshopImages />
        <WebshopContent />
        <Footer />
    </section>
</template>

<script>
import Footer from "../components/Footer.vue";
import WebshopContent from "../components/WebshopContent.vue";
import WebshopImages from "../components/WebshopImages.vue";

export default {
  name: "Home",
  components: {
    Footer,
    WebshopContent,
    WebshopImages
  }
};
</script>

<style>
    .webshop {
        text-align: center;
    }

    .webshop>h1 {
        margin: 2rem;
        font-family: 'Source Code Pro', monospace;
        color: #000000;
        font-weight: bold;
        font-size: 48px;
    }

    .webshop>p {
        margin: auto;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-size: 16px;
    }

    .webshop>p>a {
        text-decoration: underline;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-size: 16px;
    }

    .webshop>p>a:hover {
        color: #41abe0;
    }
</style>