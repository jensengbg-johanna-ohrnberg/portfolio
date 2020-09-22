<template>
    <section class="container">
        <h1 class="title"> Why would you hire me? </h1>
        <p class="text"> My goal is to get a job where I can develop my design skills.
              I would like to be able to compare Front-End Development with sports or maybe even the ocean. </p>
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
        padding-right: 1em;
        padding-left: 1em;
        padding-top: none;
        padding-bottom: none;
        margin-right: 1em;
        margin-left: 1em;
        margin-top: none;
        margin-bottom: none;
    }
    .title {
        color: rgba(81, 203, 238, 1);
        font-family: 'Ranchers', cursive;
        font-size: 30px;
    }

    .text {
        color: white;
        line-height: 1.5em;
        font-family: 'Fira Sans', sans-serif;
        font-size: 20px;
    }
</style>