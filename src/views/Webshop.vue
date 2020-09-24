<template>
    <section class="container">
        <section class="images">
            <img src="../img/webshop-products.png" alt="products">
            <img src="../img/webshop-filter.png" alt="filter">
            <img src="../img/webshop-details.png" alt="details">
            <img src="../img/webshop-cart.png" alt="cart">
        </section>
        <h1 class="title">Welcome to Webshop</h1>
        <section class="flex">
            <section class="border">
            <h4> Type: </h4>
                <p> This was a group project in school made with Vue.js. </p>
            </section>
            <section class="border">
            <h4> Requirements: </h4>
                <p> The requirements was to build a Vue-app with TDD, test-driven development. We needed to work in a group of 3 to 5 people and our working method should be agile. </p>
            </section>
            <section class="border">
            <h4> Functionality: </h4>
                <p> We built a webshop where you can buy soccer shoes. In the app, the user is supposed to be able to see all the products, filter between products, see details of a product, add a product to the shopping cart, change quantity of a product and see the total price in you shopping cart. </p>
            </section>
            <section class="border">
            <h4> My Thoughts: </h4>
                <p> I thought it was kind of a hard project because you were supposed to test the functionality with jest before you create the app. It was a different mindset that we needed to work with, but it worked out in the end. </p>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    name: "Webshop"
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