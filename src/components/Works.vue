<template>
    <section>
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title"> Want to check out some of my work? </h1>
                    <h2 class="subtitle"> Click the cards down below </h2>
                </div>
            </div>
        </section>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container cards">
                    <div v-on:click="goToAirbean" class="margin">
                        <figure class="image is-1by2">
                            <img src="../img/airbean-login.png" alt="login">
                        </figure>
                        <p class="title"> Airbean </p>
                        <p class="subtitle"> Group Assignment </p>
                    </div>
                    <div v-on:click="goToEWallet" class="margin">
                        <figure class="image is-1by2">
                            <img src="../img/e-wallet-add-cards.png" alt="addcards">
                        </figure>
                        <p class="title"> E-Wallet </p>
                        <p class="subtitle"> Individual Assignment </p>
                    </div>
                    <div v-on:click="goToWebshop" class="margin">
                        <figure class="image is-1by2">
                            <img src="../img/webshop-products.png" alt="products">
                        </figure>
                        <p class="title"> Webshop </p>
                        <p class="subtitle"> Group Assignment </p>
                    </div>
                    <div v-on:click="goToMeetUp" class="margin">
                        <figure class="image is-1by2">
                            <img src="../img/meetup-home.png" alt="meetup">
                        </figure>
                        <p class="title"> Meet Up </p>
                        <p class="subtitle"> Individual Assignment </p>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: "Works",
    methods: {
        goToAirbean() {
            this.$router.push('/airbean')
        },
        goToEWallet() {
            this.$router.push('/ewallet')
        },
        goToWebshop() {
            this.$router.push('/webshop')
        },
        goToMeetUp() {
            this.$router.push('/meetup')
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }

    .margin {
        margin: 2em;
        cursor: pointer;
    }
    /*@import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 1em;
        padding: 1em;
    }

    .title {
        color: rgba(81, 203, 238, 1);
        font-family: 'Ranchers', cursive;
        font-size: 24px;
    }

    .under-title {
        color: white;
        font-family: 'Fira Sans', sans-serif;
    }

    h4 {
        color: rgba(81, 203, 238, 1);
        font-family: 'Ranchers', cursive;
        font-size: 24px;
    }

    p {
        color: white;
        font-family: 'Fira Sans', sans-serif;
    }

    .airbean, .e-wallet, .webshop {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em;
        margin: 1em;
        width: 20em;
        border: 1px solid rgba(81, 203, 238, 1);
        color: white;
        cursor: pointer;
    }

    img {
        width: 100%;
    }*/

    /*.e-wallet {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em;
        margin: 1em;
        width: 20em;
        border: 1px solid white;
        color: white;
    }

    .webshop {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em;
        margin: 1em;
        width: 20em;
        border: 1px solid white;
        color: white;
    }*/

    /*.cards {
        display: flex;
        flex-direction: column;
        margin: 1em;
        padding: 1em;
    }*/

    /*Tablets*/
    /*@media only screen and (min-width: 600px) {
        .cards {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        .title {
            font-size: 50px;
        }
    }*/

    /*Desktop*/
    /*@media only screen and (min-width: 768px) {

    }*/
</style>