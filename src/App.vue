<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/mywork">My Work</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
  #app {
    height: 100%;
    width: 100%;
    background-color: #222222;
    background: repeating-linear-gradient(45deg, #2b2b2b 0%, #2b2b2b 10%, #222222 0%, #222222 50%) 0 / 15px 15px;
  }

  #nav {
    background-color: #333;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }

  #nav a {
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  #nav a:hover {
    background-color: #ddd;
    color: black;
  }
</style>
