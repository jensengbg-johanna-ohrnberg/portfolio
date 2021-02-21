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
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 4rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #B3F0FF;
  }

  .menuitem {
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
</style>
