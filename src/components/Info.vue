<template>
    <section class="hero is-info">
        <div class="hero-body">
            <div class="container">
                <section class="flex">
                    <h1 class="title"> Name: </h1>
                    <p class="subtitle"> Johanna Öhrnberg </p>
                </section>
                <section class="flex">
                    <h1 class="title"> Age: </h1>
                    <p class="subtitle"> {{ calculateAge }} </p>
                </section>
                <section class="flex">
                    <h1 class="title"> City: </h1>
                    <p class="subtitle"> Kungsbacka, Sweden </p>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Info",
    computed: {
        calculateAge: function() {
            let currentDate = new Date();
            let birthDate = new Date("1993/11/24");
            let difference = currentDate - birthDate;
            let age = Math.floor(difference/31557600000);
            return age
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

    .flex {
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: row;
    }

    .flex p {
        padding: 1.4em;
    }
    /*@import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.2em 1em 0 1em;
        margin: 0.2em 1em 0 1em;
    }

    .info h4 {
        font-family: 'Ranchers', cursive;
        font-size: 30px;
        color: rgba(81, 203, 238, 1);
    }

    .info p {
        font-family: 'Fira Sans', sans-serif;
        font-size: 22px;
        color: white;
    }

    .name, .age, .city {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .name p, .age p, .city p {
        padding: 1em;
        margin: 1em;
    }*/
</style>