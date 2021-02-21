<template>
  <div id="app">
    <header>
        <section id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><img class="closemenu" src="img/cross.png" alt="Close Button"></a>
            <a class="menuitem" href="index.html">Home</a>
            <a class="menuitem" href="work.html">My Work</a>
            <a class="menuitem" href="resume.html">Resume</a>
            <a class="menuitem" href="contact.html">Contact</a>
        </section>
        <span class="openbtn" onclick="openNav()"><img class="menubtn" src="img/menu.png" alt="Menu Button"></span>
    </header>
    <!--<nav id="nav" class="navbar is-black" role="navigation" aria-label="dropdown navigation">
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/mywork">My Work</router-link>
      <router-link class="navbar-item" to="/about">Resume</router-link>
      <router-link class="navbar-item" to="/contact">Contact</router-link>
    </nav>-->
    <router-view />
  </div>
</template>

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
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #B3F0FF;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 8rem;
  }

  .sidenav a {
      text-align: center;
      text-decoration: none;
      font-size: 26px;
      font-family: 'Source Code Pro', monospace;
      color: #000000;
      display: block;
      transition: 0.3s;
  }

  .sidenav a:hover {
      color: #00CCFF;
  }

  .menuitem {
      margin-top: 4rem;
  }

  .sidenav .closebtn {
      position: absolute;
      top: 2rem;
      right: 2rem;
      font-size: 36px;
  }

  #main,
  #footer {
      transition: margin-left .5s;
  }

  .openbtn {
      position: fixed;
      top: 2rem;
      left: 2rem;
      cursor: pointer;
  }

  .menubtn,
  .closemenu {
      width: 2rem;
      height: 2rem;
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
