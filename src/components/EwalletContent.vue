<template>
    <section class="info">
                <article>
                    <h3>Type:</h3>
                    <p>
                        This was a individual assignment in school made with Vue.js.
                    </p>
                </article>
                <article>
                    <h3>Requirements:</h3>
                    <p>
                        The requirements were to build a single page application in Vue.js.
                        We recieved design requirements that we needed to follow.
                    </p>
                </article>
                <article>
                    <h3>Functionality:</h3>
                    <p>
                        We developed an e-wallet where it is possible to have your credit cards in.
                        In the application the user is supposed to be able to add as many cards as possible and then activate one of them.
                    </p>
                </article>
                <article>
                    <h3>My Thoughts:</h3>
                    <p>
                        I thought it was a fun project.
                        It was our first project in Vue.js so it was a bit challenging but I'm happy how it turned out.
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