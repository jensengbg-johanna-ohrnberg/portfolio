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
                        The requirements were to develop an application using Vue.js.
                        The purpose of the project was to use Jest to test our application.
                        We were also supposed to use Docker in order to publish our application in an optional cloud service.
                    </p>
                </article>
                <article>
                    <h3>Functionality:</h3>
                    <p>
                        We developed an application where you can see upcoming meet ups as well as sign up for a specific meet up.
                        The user was also supposed to be able to write a review after attending a meet up.
                    </p>
                </article>
                <article>
                    <h3>My Thoughts:</h3>
                    <p>
                        I thought it was a fun project where I learned a lot.
                        Not just about testing and publishing which were the requirements of the project,
                        but I also developed my skills regarding CSS and design.
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