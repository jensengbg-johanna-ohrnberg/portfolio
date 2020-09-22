<template>
    <section class="container">
        <h1 class="title"> What are my skills? </h1>
        <ul class="skills">
                <li class="html"> HTML </li>
                <li class="css"> CSS </li>
                <li class="javascript"> Javascript </li>
                <li class="vuejs"> Vue.js </li>
                <li class="nodejs"> Node.js </li>
                <li class="figma"> Figma </li>
                <li class="ux-design"> UX-Design </li>
                <li class="ui-design"> UI-Design </li>
                <li class="agile-methods"> Agile Methods: Scrum and Kanban </li>
                <li class="parcel"> Parcel </li>
                <li class="docker"> Docker </li>
                <li class="ci-cd"> CI/CD </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "Skills"
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
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
        color: white;
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

    .html, .css, .javascript, .vuejs, .nodejs, .figma, .ux-design, .ui-design, .agile-methods, .parcel, .docker, .ci-cd {
        border: 1px solid white;
        padding: 1em;
        margin: 1em;
        font-family: 'Fira Sans', sans-serif;
        color: white;
        font-size: 30px;
        box-shadow: 10px 0px 20px 20px rgba(81, 203, 238, 1);
    }
</style>