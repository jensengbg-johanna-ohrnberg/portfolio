<template>
    <section class="container">
        <h1 class="title"> What are my skills? </h1>
        <ul class="skills">
            <section class="place">
                <li> HTML </li>
                <li> CSS </li>
                <li> Javascript </li>
            </section>
            <section class="place">
                <li> Vue.js </li>
                <li> Node.js </li>
            </section>
            <section class="place">
                <li> Figma </li>
                <li> UX-Design </li>
                <li> UI-Design </li>
            </section>
            <section class="place">
                <li> Agile Methods: Scrum and Kanban </li>
            </section>
            <section class="place">
                <li> Parcel </li>
                <li> Docker </li>
                <li> CI/CD </li>
            </section>
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

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Ranchers', cursive;
        font-size: 30px;
        color: white;
    }

    .place {
        display: flex;
        justify-content: space-evenly;
        padding: 1em;
        margin: 2em;
        list-style: none;
        border-radius: 100%;
        box-shadow: 10px 0px 20px 20px rgba(81, 203, 238, 1);
        font-family: 'Fira Sans', sans-serif;
        color: white;
    }

    /*Tablets*/
    @media only screen and (min-width: 600px) {
        .place {
            margin-left: 10em;
            margin-right: 10em;
        }
    }

    /*@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3em;
    }

    .title {
        color: #12B296;
        font-family: 'Ranchers', cursive;
        font-size: 30px;
    }

    .skills {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Fira Sans', sans-serif;
        font-size: 16px;
        line-height: 2em;
        color: #FFAA01;
        list-style: none;
    }*/
    /*.container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 5em 10em 10em 10em 10em 10em 10em;
        margin-bottom: none;
        margin-top: none;
        margin-left: 30em;
        margin-right: 30em;
    }

    .title {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #12B296;
        font-family: 'Ranchers', cursive;
        font-size: 40px;
    }

    .box {
        display: flex;
        justify-content: center;
        border-radius: 3em;
        background-color: #027A9F;
        font-family: 'Source Code Pro', monospace;
    }

    .text {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        text-align: center;
        color: #12B296;
        text-shadow: 0 0 5px #12B296, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
        animation: glow 1s ease-in-out infinite alternate;
    }

    @keyframes glow {
        from {
            text-shadow: 0 0 5px #E1EF7E, 0 0 10px #E1EF7E, 0 0 15px #E1EF7E, 0 0 20px #E1EF7E, 0 0 25px #E1EF7E, 0 0 30px #E1EF7E, 0 0 35px #E1EF7E;
        }
        to {
            text-shadow: 0 0 10px #E1EF7E, 0 0 20px #E1EF7E, 0 0 30px #E1EF7E, 0 0 40px #E1EF7E, 0 0 50px #E1EF7E, 0 0 60px #E1EF7E, 0 0 70px #E1EF7E;
        }
    }

    #html {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }

    #css {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }

    #javascript {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
    }

    #vuejs {
        grid-column: 2 / 3;
        grid-row: 3 / 4;
    }

    #nodejs {
        grid-column: 1 / 2;
        grid-row: 4 / 5;
    }

    #figma {
        grid-column: 2 / 3;
        grid-row: 4 / 5;
    }

    #ux-design {
        grid-column: 1 / 2;
        grid-row: 5 / 6;
    }

    #ui-design {
        grid-column: 2 / 3;
        grid-row: 5 / 6;
    }

    #agile-methods {
        grid-column: 1 / 2;
        grid-row: 6 / 7;
    }

    .text-agile {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        text-align: center;
        color: #12B296;
        text-shadow: 0 0 5px #12B296, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
        animation: glow 1s ease-in-out infinite alternate;
    }

    .hover {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        text-align: center;
        color: #12B296;
        text-shadow: 0 0 5px #12B296, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
        animation: glow 1s ease-in-out infinite alternate;
        display: none;
    }

    #agile-methods:hover .text-agile {
        display: none;
    }

    #agile-methods:hover .hover {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #parcel {
        grid-column: 2 / 3;
        grid-row: 6 / 7;
    }

    #docker {
        grid-column: 1 / 2;
        grid-row: 7 / 8;
    }

    #ci-cd {
        grid-column: 2 / 3;
        grid-row: 7 / 8;
    }*/
</style>