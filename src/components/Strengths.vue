<template>
    <section class="container">
        <h1 class="title"> What are my strengths? </h1>
        <p class="text"> I'm a fantastic team player who loves to make other people happy.
                        I'm good at both oral and written english.
                        I like to be creative and to come up with new design ideas.
                        My love to sports has made me positive and energetic which I will bring with me to whatever working place I'm at.
                        From other jobs I worked at, I have learned to handle stress well.
                        I'm always focused on what I do and try to complete my tasks as fast as possible. </p>
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
        padding: 0 1em 0 1em;
        margin: 0 1em 0 1em;
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