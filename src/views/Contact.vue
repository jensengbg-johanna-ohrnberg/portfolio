<template>
    <section>
        <section class="contact">
            <h1>Contact Me</h1>
            <p><span>Email: </span>j-ohrnberg@live.se</p>
            <p><span>Phone Number: </span>0703 - 73 43 20</p>
            <a href="https://www.linkedin.com/in/johanna-%C3%B6hrnberg-7a6b17196/">Linkedin</a>
            <a href="https://github.com/jensengbg-johanna-ohrnberg">Github</a>
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
</style>