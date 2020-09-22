<template>
  <div id="app">
    <div id="nav">
      <router-link class="home" to="/">Home</router-link>
      <router-link class="my-work" to="/mywork">My Work</router-link>
      <router-link class="about" to="/about">About</router-link>
      <router-link class="contact" to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
  #app {
    /*height: 100%;
    width: 100%;*/
    background-color: #222222;
    background: repeating-linear-gradient(45deg, #2b2b2b 0%, #2b2b2b 10%, #222222 0%, #222222 50%) 0 / 15px 15px;
  }

  #nav {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: row;
    background-color: #333;
  }

  #nav > .home, .my-work, .about, .contact {
    padding: 1em;
    font-size: 1em;
    /*text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;*/
  }

  #nav > .home:hover, .my-work:hover, .about:hover, .contact:hover {
    background-color: #ddd;
    color: black;
  }

  .home, .my-work, .about, .contact {
    color: #f2f2f2;
    text-decoration: none;
  }
</style>
