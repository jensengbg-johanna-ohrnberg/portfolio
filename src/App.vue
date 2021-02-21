<template>
  <div id="app">
    <nav id="nav" role="navigation" aria-label="dropdown navigation">
      <router-link class="menuitem" to="/">Home</router-link>
      <router-link class="menuitem" to="/mywork">My Work</router-link>
      <router-link class="menuitem" to="/about">Resume</router-link>
      <router-link class="menuitem" to="/contact">Contact</router-link>
    </nav>
    <router-view />
    <section class="footer">
            <section>
                <h5>Visit Me</h5>
                <section>
                    <a href="https://www.linkedin.com/in/johanna-%C3%B6hrnberg-7a6b17196/" target="_blank"><img src="img/linkedinLogo.png" alt="Linkedin Logo"></a>
                    <a href="https://github.com/jensengbg-johanna-ohrnberg" target="_blank"><img src="img/githubLogo.png" alt="Github Logo"></a>
                </section>
            </section>
            <section>
                <h5>Fast Links</h5>
                <a href="work.html">My Work</a>
                <a href="resume.html">My Resume</a>
                <a href="contact.html">Contact</a>
            </section>
            <section>
                <h5>Contact</h5>
                <a href="">j-ohrnberg@live.se</a>
            </section>
        </section>
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

  .footer {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.footer>section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.footer>section>h5 {
    color: #000000;
    font-family: 'Source Code Pro', monospace;
    padding-bottom: 0.5rem;
}

.footer>section>a {
    color: #000000;
    font-family: 'Source Code Pro', monospace;
    padding-bottom: 0.2rem;
    text-decoration: none;
    font-size: 12px;
}

.footer>section>section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.footer>section>section>a>img {
    margin: 1rem;
}
  /*#nav {
    display: flex;
    justify-content: center;
    text-align: center;
  }*/
</style>
