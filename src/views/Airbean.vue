<template>
    <section>
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <img src="../img/airbean-login.png" alt="login">
                    <img src="../img/airbean-menu.png" alt="menu">
                    <img src="../img/airbean-order.png" alt="order">
                    <img src="../img/airbean-done.png" alt="done">
                </div>
            </div>
        </section>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Welcome to Airbean</h1>
                </div>
            </div>
        </section>
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <article>
                        <div class="kort">
                            <h4 class="subtitle"> Type: </h4>
                            <p> This was a group assignment in school made with Vue.js. </p>
                        </div>
                        <div class="kort">
                            <h4 class="subtitle"> Requirements: </h4>
                            <p> The requirements were to build a single page application in Vue.js. During the project we were supposed to use Vue-router and Vuex. We recieved design requirements that we needed to follow. </p>
                        </div>
                        <div class="kort">
                            <h4 class="subtitle"> Functionality: </h4>
                            <p> We developed an application where it is possible to order coffee and have it delivered with a drone. In the application, the user is supposed be able to order coffee, sign in to an account, see the order history as well as the estimated delivery time until the coffee arrives. </p>
                        </div>
                        <div class="kort">
                            <h4 class="subtitle"> My Thoughts: </h4>
                            <p> I thought it was a fun project where I got to develop my skills in both Vue.js and Vuex. It was also challenging as we got an api that we were supposed to use in our application. It was my first time working with apis. Due to good team work we were able to fulfill the assignment. </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: "Airbean"
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }

    img {
        width: 10em;
        margin: 1em;
    }

    article {
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .kort {
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 2em;
        margin: 5em;
        margin-top: 1em;
        width: 20em;
        border: 1px solid hsl(0, 0%, 21%);
    }
    /*@import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
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
    }*/
</style>