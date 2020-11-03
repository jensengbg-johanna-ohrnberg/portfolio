<template>
    <section>
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <img src="../img/meetup-home.png" alt="home">
                    <img src="../img/meetup-signup.png" alt="signup">
                    <img src="../img/meetup-reviews.png" alt="reviews">
                </div>
            </div>
        </section>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Welcome to Meet Up</h1>
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
                            <p> The requirements were to develop an application using Vue.js. The purpose of the project was to use Jest to test our application. We were also supposed to use Docker in order to publish our application in an optional cloud service. </p>
                        </div>
                        <div class="kort">
                            <h4 class="subtitle"> Functionality: </h4>
                            <p> We developed an application where you can see upcoming meet ups as well as sign up for a specific meet up. The user was also supposed to be able to write a review after attending a meet up. </p>
                        </div>
                        <div class="kort">
                            <h4 class="subtitle"> My Thoughts: </h4>
                            <p> I thought it was a fun project where I learned a lot. Not just about testing and publishing which were the requirements of the project, but I also developed my skills regarding CSS and design. </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: "Meetup"
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