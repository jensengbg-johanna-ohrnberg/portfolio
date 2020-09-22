<template>
    <section class="container">
        <h1 class="title"> Contact Me </h1>
        <p class="email"> j-ohrnberg@live.se </p>
        <p class="number"> +46 703 - 73 43 20 </p>
        <p class="linkedin"> <a href="https://www.linkedin.com/in/johanna-%C3%B6hrnberg-7a6b17196/"> Linkedin </a> </p>
        <h4 class="github-title"> Find all my work on Github </h4>
        <p class="github"> <a href="https://github.com/jensengbg-johanna-ohrnberg?tab=repositories"> <img src="../img/github-icon.png" alt="github"> </a> </p>
    </section>
</template>

<script>
export default {
    name: "ContactInfo"
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
    }

    .title {
        font-family: 'Ranchers', cursive;
        font-size: 80px;
        color: #fff;
        text-align: center;
        -webkit-animation: glow 1s ease-in-out infinite alternate;
        animation: glow 1s ease-in-out infinite alternate;
    }

    @-webkit-keyframes glow {
        from {
            text-shadow: 0 0 10px #fff,
            0 0 20px #fff,
            0 0 30px rgba(81, 203, 238, 1),
            0 0 40px rgba(81, 203, 238, 1),
            0 0 50px rgba(81, 203, 238, 1),
            0 0 60px rgba(81, 203, 238, 1),
            0 0 70px rgba(81, 203, 238, 1);
        }
        to {
            text-shadow: 0 0 20px #fff,
            0 0 30px #9ecaed,
            0 0 40px #9ecaed,
            0 0 50px #9ecaed,
            0 0 60px #9ecaed,
            0 0 70px #9ecaed,
            0 0 80px #9ecaed;
        }
    }

    .email {
        font-family: 'Fira Sans', sans-serif;
        color: white;
    }

    .number {
        font-family: 'Fira Sans', sans-serif;
        color: white;
    }

    .linkedin a {
        font-family: 'Fira Sans', sans-serif;
        color: white;
        text-decoration: none;
    }

    .github-title {
        font-family: 'Fira Sans', sans-serif;
        color: white;
    }

    .github a img {
        width: 10em;
        height: 10em;
    }
</style>