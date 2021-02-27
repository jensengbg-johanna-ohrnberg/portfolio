<template>
    <section>
        <section class="meetup">
            <h1>Meet Up</h1>
            <p>This is one of my websites I made in school. Check out the images below or go see the actual code at <a href="https://github.com/jensengbg-johanna-ohrnberg/meetup" target="_blank">Github</a> or see the published version at <a href="https://join-meetup.herokuapp.com/" target="_blank">join-meetup.herokuapp.com</a>.</p>
        </section>
        <MeetUpImages />
        <MeetUpContent />
        <Footer />
    </section>
</template>

<script>
import Footer from "../components/Footer.vue";
import MeetUpContent from "../components/MeetUpContent.vue";
import MeetUpImages from "../components/MeetUpImages.vue";

export default {
  name: "Home",
  components: {
    Footer,
    MeetUpContent,
    MeetUpImages
  }
};
</script>

<style>
    .meetup {
        text-align: center;
    }

    .meetup>h1 {
        margin: 2rem;
        font-family: 'Source Code Pro', monospace;
        color: #000000;
        font-weight: bold;
        font-size: 48px;
    }

    .meetup>p {
        margin: auto;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-size: 16px;
    }

    .meetup>p>a {
        text-decoration: underline;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-size: 16px;
    }

    .meetup>p>a:hover {
        color: #41abe0;
    }
</style>