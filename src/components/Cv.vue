<template>
    <section class="container">
        <h1 class="title"> CV </h1>
        <img class="img" src="../assets/cv.png" alt="cv">
    </section>
</template>

<script>
export default {
    name: "Strengths"
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1em 2em 1em;
        margin: 0 1em 2em 1em;
    }
    .title {
        color: rgba(81, 203, 238, 1);
        font-family: 'Ranchers', cursive;
        font-size: 30px;
    }

    .img {
        width: 100%;
    }

    @media only screen and (min-width: 600px) {
        .img {
            width: 40%;
        }
    }
</style>