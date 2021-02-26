<template>
    <section>
        <section class="work">
            <h1>Internship</h1>
            <Internship />
            <h1>School Work</h1>
            <School />
        </section>
        <Footer />
    </section>
</template>

<script>
import Footer from "../components/Footer.vue"
import Internship from "../components/Internship.vue"
import School from "../components/School.vue"

export default {
  name: "Home",
  components: {
    Footer,
    Internship,
    School
  }
};
</script>

<style>
    .work {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .work>h1 {
        margin: 2rem;
        font-family: 'Source Code Pro', monospace;
        color: #000000;
        font-size: 36px;
        font-weight: bold;
    }
</style>