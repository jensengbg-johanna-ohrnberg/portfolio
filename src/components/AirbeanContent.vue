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
                        The requirements were to build a single page application in Vue.js.
                        During the project we were supposed to use Vue-router and Vuex.
                        We recieved design requirements that we needed to follow.
                    </p>
                </article>
                <article>
                    <h3>Functionality:</h3>
                    <p>
                        We developed an application where it is possible to order coffee and have it delivered with a drone.
                        In the application, the user is supposed be able to order coffee, sign in to an account,
                        see the order history as well as the estimated delivery time until the coffee arrives.
                    </p>
                </article>
                <article>
                    <h3>My Thoughts:</h3>
                    <p>
                        I thought it was a fun project where I got to develop my skills in both Vue.js and Vuex.
                        It was also challenging as we got an api that we were supposed to use in our application.
                        It was my first time working with apis. Due to good team work we were able to fulfill the assignment.
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

    @media only screen and (max-width: 430px) {
        .info>article {
            width: 100%;
            height: 100%;
        }
    }
</style>