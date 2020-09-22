<template>
    <section class="container">
        <section class="info">
            <section class="name">
                <h4> Name: </h4>
                <p> Johanna Öhrnberg </p>
            </section>
            <section class="age">
                <h4> Age: </h4>
                <p> {{ calculateAge }} </p>
            </section>
            <section class="city">
                <h4> City: </h4>
                <p> Kungsbacka, Sweden </p>
            </section>
        </section>
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
    @import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
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
    }
</style>