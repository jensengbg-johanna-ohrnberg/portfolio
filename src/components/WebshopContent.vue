<template>
    <section class="info">
                <article>
                    <h3>Type:</h3>
                    <p>
                        This was a group assignment in school made with Vue.js.
                    </p>
                </article>
                <article>
                    <h3>Requirements:</h3>
                    <p>
                        The requirements were to develop a Vue-app with TDD, test-driven development.
                        We were supposed to work in a group of 3 to 5 people and use an agile working method.
                    </p>
                </article>
                <article>
                    <h3>Functionality:</h3>
                    <p>
                        We developed a webshop where you can buy soccer shoes.
                        In the application, the user was supposed to be able to see all the products available for sale,
                        filter between products, see a detailed description of each product,
                        add a product to the shopping cart, change quantity of a product and see the total price in there shopping cart.
                    </p>
                </article>
                <article>
                    <h3>My Thoughts:</h3>
                    <p>
                        I thought this was a challenging project because we were supposed to test the functionality with jest before we created the application.
                        The project required a different mindset, but worked out well in the end.
                    </p>
                </article>
            </section>
</template>

<style>
    .info {
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .info>article {
        width: 20rem;
        height: 20rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        margin: 2rem;
        padding: 1rem;
        text-align: center;
    }

    .info>article>h3 {
        text-align: center;
        font-family: 'Source Code Pro', monospace;
        color: #000000;
        font-weight: bold;
        font-size: 24px;
    }

    .info>article>p {
        text-align: start;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-size: 14px;
        padding: 1rem;
        width: 100%;
    }
</style>