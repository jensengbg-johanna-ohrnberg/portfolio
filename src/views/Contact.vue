<template>
    <section>
        <section class="contact">
            <h1>Contact Me</h1>
            <a href="mailto:j-ohrnberg@live.se"><span>Email: </span>j-ohrnberg@live.se</a>
            <p><span>Phone Number: </span>0703 - 73 43 20</p>
            <h4>Visit Me at:</h4>
            <a href="https://www.linkedin.com/in/johanna-%C3%B6hrnberg-7a6b17196/">Linkedin</a>
            <img src="../img/linkedinLogo.png" alt="Linkedin Logo">
            <a href="https://github.com/jensengbg-johanna-ohrnberg">Github</a>
            <img src="../img/githubLogo.png" alt="Github Logo">
        </section>
        <Footer />
    </section>
</template>

<script>
import Footer from "../components/Footer.vue"

export default {
  name: "Home",
  components: {
    Footer
  }
};
</script>

<style>
    .contact {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .contact>h1 {
        text-align: center;
        margin: 2rem;
        font-family: 'Source Code Pro', monospace;
        color: #000000;
        font-weight: bold;
        font-size: 48px;
    }

    .contact>a {
        text-align: center;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-weight: normal;
        font-size: 18px;
        text-decoration: none;
        margin: 0.5rem;
    }

    .contact>a>span {
        font-weight: bold;
    }

    .contact>p {
        text-align: center;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-weight: normal;
        font-size: 18px;
    }

    .contact>p>span {
        font-weight: bold;
    }

    .contact>h4 {
        text-align: center;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 0.5rem;
    }

    .contact>img {
        margin-bottom: 2rem;
    }
</style>