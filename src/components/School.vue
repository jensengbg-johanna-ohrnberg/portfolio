<template>
    <section class="school">
        <article>
            <img class="airbean" src="../img/airbean-small.png" alt="AirBean">
            <h2>AirBean</h2>
            <button v-on:click="goToAirbean">Read More...</button>
        </article>
        <article>
            <img src="../img/e-wallet-small.png" alt="E-Wallet">
            <h2>E-Wallet</h2>
            <button v-on:click="goToEwallet">Read More...</button>
        </article>
        <article>
            <img src="../img/webshop-small.png" alt="WebShop">
            <h2>Web Shop</h2>
            <button v-on:click="goToWebshop">Read More...</button>
        </article>
        <article>
            <img src="../img/meetup-small.png" alt="Meet Up">
            <h2>Meet Up</h2>
            <button v-on:click="goToMeetup">Read More...</button>
        </article>
    </section>
</template>

<script>
export default {
    methods: {
      goToAirbean: function () {
          this.$router.push({ path: 'airbean' });
      },
      goToEwallet: function () {
          this.$router.push({ path: 'ewallet' });
      },
      goToWebshop: function () {
          this.$router.push({ path: 'webshop' });
      },
      goToMeetup: function () {
          this.$router.push({ path: 'meetup' });
      }
  }
}
</script>

<style>
    .school {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 80%;
    }

    .school>article {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 20rem;
        height: 20rem;
        margin: 1rem;
    }

    .school>article>img {
        width: 100%;
        height: 68%;
    }

    .school>article>h2 {
        width: 100%;
        height: 14%;
        text-align: center;
        font-family: 'Source Code Pro', monospace;
        color: #000000;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .school>article>button {
        width: 100%;
        height: 18%;
        border: none;
        color: #FFFFFF;
        background-color: #000000;
        cursor: pointer;
        font-size: 18px;
        font-family: 'Balsamiq Sans', cursive;
    }

    .school>article>button:hover {
        opacity: 0.7;
    }
</style>