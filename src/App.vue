<template>
  <div id="app">
    <nav id="nav" class="navbar is-black" role="navigation" aria-label="dropdown navigation">
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/mywork">My Work</router-link>
      <router-link class="navbar-item" to="/about">About Me</router-link>
      <router-link class="navbar-item" to="/contact">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
  #nav {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  /*#app {
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
  }

  #nav > .home:hover, .my-work:hover, .about:hover, .contact:hover {
    background-color: #ddd;
    color: black;
  }

  .home, .my-work, .about, .contact {
    color: #f2f2f2;
    text-decoration: none;
  }*/
</style>
