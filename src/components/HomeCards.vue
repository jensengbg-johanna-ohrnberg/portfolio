<template>
    <section class="card-container">
        <article class="card">
            <img src="../img/intelium_home_1.png" alt="My Work">
            <button v-on:click="goToMyWork">See my Work</button>
        </article>
        <article class="card">
            <img src="../img/cv.png" alt="My Resume">
            <button v-on:click="goToResume">Check out my Resume</button>
        </article>
        <article class="card">
            <img src="../img/me.png" alt="Contact Me">
            <button v-on:click="goToContact">Contact Me</button>
        </article>
    </section>
</template>

<script>
export default {
    methods: {
        goToMyWork: function () {
            this.$router.push({ path: 'mywork' });
        },
        goToResume: function () {
            this.$router.push({ path: 'resume' });
        },
        goToContact: function () {
            this.$router.push({ path: 'contact' });
        }
    }
}
</script>

<style>
    .card-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 20rem;
        height: 20rem;
        margin: 1rem;
    }

    .card img {
        width: 100%;
        height: 80%;
    }

    .card button {
        width: 100%;
        height: 20%;
        color: #FFFFFF;
        background-color: #000000;
        border: none;
        cursor: pointer;
        font-size: 18px;
        font-family: 'Balsamiq Sans', cursive;
    }

    .card button:hover {
        opacity: 0.7;
    }

    @media only screen and (max-width: 570px) {
        .card {
            width: 15rem;
            height: 15rem;
        }
    }
    @media only screen and (max-width: 350px) {
        .card {
            width: 10rem;
            height: 10rem;
        }

        .card button {
            font-size: 14px;
        }
    }
</style>