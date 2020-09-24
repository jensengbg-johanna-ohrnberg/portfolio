<template>
    <section class="container">
        <section class="images">
            <img src="../img/airbean-login.png" alt="login">
            <img src="../img/airbean-menu.png" alt="menu">
            <img src="../img/airbean-order.png" alt="order">
            <img src="../img/airbean-done.png" alt="done">
        </section>
        <h1 class="title">Welcome to Airbean</h1>
        <section class="flex">
            <section class="border">
            <h4> Type: </h4>
                <p> This was a group project in school made with Vue.js. </p>
            </section>
            <section class="border">
            <h4> Requirements: </h4>
                <p> The requirements was to build a single page application in Vue.js. In the project we should use Vue-router and Vuex. We got a design from the professor that we needed to follow. </p>
            </section>
            <section class="border">
            <h4> Functionality: </h4>
                <p> We made a app where you can order coffee and it gets delivered with a drone. In the app, the user is supposed be able to order coffee, sign in to a account, see the order history and lastly see how much time it will take until the coffee arrives. </p>
            </section>
            <section class="border">
            <h4> My Thoughts: </h4>
                <p> I thought it was a fun project where I developed my skills in both Vue.js and Vuex. It was a bit hard too because we got an API that we needed to use in our app which I thought was kind of hard, but together as a group it worked out well. </p>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    name: "Airbean"
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
        margin: 1em;
        padding: 1em;
    }

    .title, h4 {
        font-family: 'Ranchers', cursive;
        font-size: 30px;
        color: rgba(81, 203, 238, 1);
    }

    .flex {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 1em;
        margin: 1em;
    }

    .border {
        border: 1px solid white;
        margin: 1em;
        padding: 1em;
        width: 80%;
    }

    p {
        font-family: 'Fira Sans', sans-serif;
        font-size: 22px;
        color: white;
    }

    img {
        width: 8em;
        padding: 1em;
    }

    .images {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    @media only screen and (min-width: 800px) {
        .img {
            width: 10em;
        }

        .flex {
            flex-direction: row;
        }

        .border {
            width: 35%;
        }
    }
</style>