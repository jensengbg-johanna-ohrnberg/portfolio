<template>
  <div id="app">
    <nav id="nav" role="navigation" aria-label="dropdown navigation">
      <router-link class="menuitem" to="/">Home</router-link>
      <router-link class="menuitem" to="/mywork">My Work</router-link>
      <router-link class="menuitem" to="/about">Resume</router-link>
      <router-link class="menuitem" to="/contact">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Source+Code+Pro&display=swap');
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  #app {
    background-color: rgb(214, 250, 255);
  }
  #nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #B3F0FF;
  }

  .menuitem {
      margin-top: 4rem;
      text-align: center;
      text-decoration: none;
      font-size: 26px;
      font-family: 'Source Code Pro', monospace;
      color: #000000;
  }

  .menuitem:hover {
      color: #00CCFF;
  }
  /*#nav {
    display: flex;
    justify-content: center;
    text-align: center;
  }*/
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
