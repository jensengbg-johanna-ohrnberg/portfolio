<template>
    <section>
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <img src="../img/e-wallet-add-cards.png" alt="addcards">
            <img src="../img/e-wallet-cards.png" alt="cards">
                </div>
            </div>
        </section>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Welcome to E-Wallet</h1>
                </div>
            </div>
        </section>
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <article>
                        <div class="kort">
                            <h4 class="subtitle"> Type: </h4>
                            <p> This was a individual assignment in school made with Vue.js. </p>
                        </div>
                        <div class="kort">
                            <h4 class="subtitle"> Requirements: </h4>
                            <p> The requirements were to build a single page application in Vue.js. We recieved design requirements that we needed to follow. </p>
                        </div>
                        <div class="kort">
                            <h4 class="subtitle"> Functionality: </h4>
                            <p> We developed an e-wallet where it is possible to have your credit cards in. In the application the user is supposed to be able to add as many cards as possible and then activate one of them. </p>
                        </div>
                        <div class="kort">
                            <h4 class="subtitle"> My Thoughts: </h4>
                            <p> I thought it was a fun project. It was our first project in Vue.js so it was a bit challenging but I'm happy how it turned out. </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </section>
    <!--<section class="container">
        <section class="images">
            <img src="../img/e-wallet-add-cards.png" alt="addcards">
            <img src="../img/e-wallet-cards.png" alt="cards">
        </section>
        <h1 class="title">Welcome to E-Wallet</h1>
        <section class="flex">
            <section class="border">
            <h4> Type: </h4>
                <p> This was a individual project in school made with Vue.js. </p>
            </section>
            <section class="border">
            <h4> Requirements: </h4>
                <p> The requirements was to build a single page application in Vue.js. We got a design from the professor that we needed to follow. </p>
            </section>
            <section class="border">
            <h4> Functionality: </h4>
                <p> We made a e-wallet where you can have your credit cards in. In the app, the user is supposed to be able to add as many cards as possible and then activate one of them. </p>
            </section>
            <section class="border">
            <h4> My Thoughts: </h4>
                <p> I thought it was a fun project. It was our first project in Vue.js so it was a bit challenging but I'm happy how it turned out. </p>
            </section>
        </section>
    </section>-->
</template>

<script>
export default {
    name: "E-Wallet"
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