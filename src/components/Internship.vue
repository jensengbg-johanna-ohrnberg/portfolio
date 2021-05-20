<template>
    <section class="internship">
        <article>
            <img src="../img/intelium_home_1.png" alt="Intelium Engineering AB">
            <h2>Intelium Engineering AB</h2>
            <button v-on:click="goToIntelium">Read More...</button>
        </article>
        <article>
            <img src="../img/mcub_home_1.png" alt="m:CUB Engineering">
            <h2>m:CUB Engineering</h2>
            <button v-on:click="goToMcub">Read More...</button>
        </article>
    </section>
</template>

<script>
export default {
    methods: {
        goToIntelium: function () {
            this.$router.push({ path: 'intelium' });
        },
        goToMcub: function () {
            this.$router.push({ path: 'mcub' });
        }
    }
}
</script>

<style>
    .internship {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 80%;
    }

    .internship>article {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 20rem;
        height: 20rem;
        margin: 1rem;
    }

    .internship>article>img {
        width: 100%;
        height: 68%;
    }

    .internship>article>h2 {
        width: 100%;
        height: 14%;
        text-align: center;
        font-family: 'Source Code Pro', monospace;
        color: #000000;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .internship>article>button {
        width: 100%;
        height: 18%;
        border: none;
        color: #FFFFFF;
        background-color: #000000;
        cursor: pointer;
        font-size: 18px;
        font-family: 'Balsamiq Sans', cursive;
    }

    .internship>article>button:hover {
        opacity: 0.7;
    }

    @media only screen and (max-width: 380px) {
        .internship>article {
            height: 15rem;
        }

        .internship>article>h2 {
            font-size: 14px;
        }
    }
</style>