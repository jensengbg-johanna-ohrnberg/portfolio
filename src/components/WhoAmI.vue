<template>
    <section class="container">
        <h1 class="title"> JOHANNA ÖHRNBERG </h1>
        <section class="text">
            <p> I'm a student who are studying to become a FRONT-END DEVELOPER. </p>
            <p> I'm in my third semester out of four and I am continously developing my skills. </p>
            <p> I'm now looking for an INTERNSHIP that will develop my skills even more. </p>
            <p> I am happy to take on new challenges and I will happily contribute with my knowledge. </p>
            <p> With all the skills I am gaining during my education, I want to continue to develop together with your team. </p>
        </section>
    </section>
</template>

<script>
export default {
    name: "WhoAmI"
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 3.5em;
        font-family: 'Ranchers', cursive;
        margin: 40px 0 20px 0;
        color: rgba(81, 203, 238, 1);
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em;
        margin: 1em;
        font-family: 'Fira Sans', sans-serif;
        line-height: 1.5em;
        color: white;
    }
</style>