<template>
    <section class="hero is-dark">
        <div class="hero-body">
            <div class="container">
                <h1 class="title"> What are my skills? </h1>
                <ul class="skills">
                    <li class="subtitle"> HTML </li>
                    <li class="subtitle"> CSS </li>
                    <li class="subtitle"> Javascript </li>
                    <li class="subtitle"> Vue.js </li>
                    <li class="subtitle"> Node.js </li>
                    <li class="subtitle"> Figma </li>
                    <li class="subtitle"> UX-Design </li>
                    <li class="subtitle"> UI-Design </li>
                    <li class="subtitle"> CI/CD </li>
                    <li class="subtitle"> TDD: Jest </li>
                    <li class="subtitle"> Parcel </li>
                    <li class="subtitle"> Docker </li>
                    <li class="subtitle"> Agile Methods: Scrum and Kanban </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Skills"
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    .subtitle {
        border: 1px solid hsl(204, 86%, 53%);
        width: 10em;
        margin: 2em;
        padding: 2em;
    }

    .skills {
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
    /*@import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Ranchers', cursive;
        font-size: 30px;
        color: rgba(81, 203, 238, 1);
    }

    .skills {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        list-style: none;
        padding: 1em;
        margin: 1em;
    }

    .html, .css, .javascript, .vuejs, .nodejs, .figma, .ux-design, .ui-design, .agile-methods, .jest, .parcel, .docker, .ci-cd {
        border: 1px solid white;
        padding: 1em;
        margin: 1em;
        font-family: 'Fira Sans', sans-serif;
        color: white;
        font-size: 30px;
        box-shadow: 0 0 20px 20px rgba(81, 203, 238, 1);
    }*/
</style>