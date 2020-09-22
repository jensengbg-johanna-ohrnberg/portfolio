<template>
    <section class="container">
        <section class="images">
            <img src="../img/webshop-products.png" alt="products">
            <img src="../img/webshop-filter.png" alt="filter">
            <img src="../img/webshop-details.png" alt="details">
            <img src="../img/webshop-cart.png" alt="cart">
        </section>
        <h1 class="title">Welcome to Webshop</h1>
        <p> This was a group project in school made with Vue.js. The requirements was to use vue router and vuex. </p>
        <p> I thought it was a good learning experience where you needed to have good communication with your group members. </p>
    </section>
</template>

<script>
export default {
    name: "Webshop"
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1em;
        padding: 1em;
    }

    .title {
        color: white;
    }

    p {
        color: white;
    }

    img {
        width: 6em;
        height: 10em;
        padding: 1em;
    }

    .images {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
</style>