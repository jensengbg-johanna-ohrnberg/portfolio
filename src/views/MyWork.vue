<template>
    <section>
        <section class="work">
            <h1>Internship</h1>
            <section class="internship">
                <article>
                    <img src="../img/intelium_home_1.png" alt="Intelium Engineering AB">
                    <h2>Intelium Engineering AB</h2>
                    <button v-on:click="goToIntelium">Read More...</button>
                </article>
                <article>
                    <h2>Coming Soon...</h2>
                </article>
                <article>
                    <h2>Coming Soon...</h2>
                </article>
            </section>
            <h1>School Work</h1>
            <section class="school">
                <article>
                    <img class="airbean" src="../img/airbean-login.png" alt="AirBean">
                    <h2>AirBean</h2>
                    <!--<h4>Group Assignment in School</h4>-->
                    <button v-on:click="goToAirbean">Read More...</button>
                </article>
                <article>
                    <img src="../img/e-wallet-cards.png" alt="E-Wallet">
                    <h2>E-Wallet</h2>
                    <!--<h4>Individual Assignment in School</h4>-->
                    <button v-on:click="goToEwallet">Read More...</button>
                </article>
                <article>
                    <img src="../img/webshop-products.png" alt="WebShop">
                    <h2>Web Shop</h2>
                    <!--<h4>Group Assignment in School</h4>-->
                    <button v-on:click="goToWebshop">Read More...</button>
                </article>
                <article>
                    <img src="../img/meetup-home.png" alt="Meet Up">
                    <h2>Meet Up</h2>
                    <!--<h4>Individual Assignment in School</h4>-->
                    <button v-on:click="goToMeetup">Read More...</button>
                </article>
            </section>
        </section>
        <Footer />
    </section>
</template>

<script>
import Footer from "../components/Footer.vue"

export default {
  name: "Home",
  components: {
    Footer
  },
  methods: {
      goToIntelium: function () {
          this.$router.push({ path: 'intelium' });
      },
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
};
</script>

<style>
    .work {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.work>h1 {
    margin: 2rem;
    font-family: 'Source Code Pro', monospace;
    color: #000000;
    font-size: 36px;
    font-weight: bold;
}

.internship,
.school {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
}

.internship>article {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 20rem;
    height: 20rem;
    margin: 1rem;
}

.school>article {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 20rem;
    height: 40rem;
    margin: 1rem;
}

.internship>article>img {
    width: 20rem;
    height: 12rem;
}

.school>article>img {
    width: 20rem;
    height: 32rem;
}

.internship>article>h2,
.school>article>h2 {
    text-align: center;
    margin: 1.55rem;
    font-family: 'Source Code Pro', monospace;
    color: #000000;
    font-size: 18px;
}

.internship>article>button,
.school>article>button {
    border: none;
    outline: 0;
    color: white;
    padding: 1rem;
    background-color: #000000;
    text-align: center;
    cursor: pointer;
    width: 20rem;
    font-size: 18px;
    font-family: 'Balsamiq Sans', cursive;
}

.internship>article>button:hover,
.school>article>button:hover {
    opacity: 0.7;
}
</style>