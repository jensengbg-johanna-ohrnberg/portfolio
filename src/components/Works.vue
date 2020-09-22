<template>
    <section class="container">
        <h1 class="title"> Want to check out some of my work? </h1>
        <h2 class="under-title"> Click the cards down below </h2>
        <section class="cards">
            <section v-on:click="goToAirbean" class="airbean">
                <img src="../img/airbean-login.png" alt="login">
                <h4> Airbean </h4>
                <p> Group Assignment </p>
            </section>
            <section v-on:click="goToEWallet" class="e-wallet">
                <img src="../img/e-wallet-add-cards.png" alt="addcards">
                <h4> E-Wallet </h4>
                <p> Individual Assignment </p>
            </section>
            <section v-on:click="goToWebshop" class="webshop">
                <img src="../img/webshop-products.png" alt="products">
                <h4> Webshop </h4>
                <p> Group Assigment </p>
            </section>
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
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
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
    }

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

    .cards {
        display: flex;
        flex-direction: column;
        margin: 1em;
        padding: 1em;
    }

    /*Tablets*/
    @media only screen and (min-width: 600px) {
        .cards {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        .title {
            font-size: 50px;
        }
    }

    /*Desktop*/
    @media only screen and (min-width: 768px) {

    }
</style>