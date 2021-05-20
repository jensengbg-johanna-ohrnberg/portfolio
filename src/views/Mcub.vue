<template>
    <section>
        <section class="mcub">
            <h1>m:CUB Engineering</h1>
            <p>This is one of my websites I made for my internship. Check out the images below or visit the actual website at <a href="https://www.mcub.se/" target="_blank">www.mcub.se</a>.</p>
        </section>
        <McubImages />
        <McubContent />
        <Footer />
    </section>
</template>

<script>
import Footer from "../components/Footer.vue";
import McubContent from "../components/McubContent.vue";
import McubImages from "../components/McubImages.vue";

export default {
  name: "Home",
  components: {
    Footer,
    McubContent,
    McubImages
  }
};
</script>

<style lang="scss">
    .mcub>h1 {
        text-align: center;
        margin: 2rem;
        font-family: 'Source Code Pro', monospace;
        color: #000000;
        font-weight: bold;
        font-size: 48px;
    }

    .mcub>p {
        text-align: center;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-size: 16px;
        margin: auto;
    }

    .mcub>p>a {
        text-decoration: underline;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-size: 16px;
    }

    .mcub>p>a:hover {
        color: #41abe0;
    }

    @media only screen and (max-width: 400px) {
        .mcub>h1 {
            font-size: 32px;
        }
    }

    @media only screen and (max-width: 290px) {
        .mcub>h1 {
            font-size: 24px;
        }
    }
</style>