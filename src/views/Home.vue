<template>
  <section>
    <section class="personal-letter">
            <h1>Welcome Employers!</h1>
            <p>My name is Johanna Öhrnberg and I am a student studying to become a Front-End Developer. I am graduating in June and I'm looking for a new challenge. I have recently done an internship at Intelium Engineering AB where I have helped them to
                create their webpage from scratch.
            </p>
            <section class="card-container">
                <article class="card">
                    <img src="img/intelium_home_1.png" alt="My Work">
                    <a href="work.html"><button>See My Work</button></a>
                </article>
                <article class="card">
                    <img src="img/cv.png" alt="My Resume">
                    <a href="resume.html"><button>Check Out My Resume</button></a>
                </article>
                <article class="card">
                    <img src="img/me.png" alt="Contact Me">
                    <a href="contact.html"><button>Contact me</button></a>
                </article>
            </section>
        </section>
        <section class="compentences">
            <h1>My Competences</h1>
            <section class="first">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Vue</li>
                    <li>Node</li>
                    <li>PHP</li>
                    <li>MySQL Databases</li>
                    <li>CI/CD</li>
                    <li>Parcel</li>
                    <li>Docker</li>
                </ul>
            </section>
            <section class="second">
                <ul>
                    <li>Design
                        <ul>
                            <li>Figma</li>
                            <li>UX-Design</li>
                            <li>UI-Design</li>
                        </ul>
                    </li>
                    <li>TDD
                        <ul>
                            <li>Jest</li>
                        </ul>
                    </li>
                    <li>Agile Methods
                        <ul>
                            <li>Scrum</li>
                            <li>Kanban</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </section>
      <!--<WhoAmI />
      <Skills />-->
  </section>
</template>

<script>
/*import WhoAmI from "../components/WhoAmI.vue"
import Skills from "../components/Skills.vue"

export default {
  name: "Home",
  components: {
    WhoAmI,
    Skills
  }
};*/
</script>

<style>
 .personal-letter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.personal-letter>h1 {
    font-family: 'Source Code Pro', monospace;
    color: #000000;
    font-weight: bold;
    font-size: 48px;
    margin: 2rem;
}

.personal-letter>p {
    font-family: 'Balsamiq Sans', cursive;
    color: #000000;
    font-size: 16px;
    margin: 0.5rem;
    margin-bottom: 2rem;
    line-height: 26px;
    width: 60%;
}

.card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 20rem;
    height: 20rem;
    margin: 1rem;
}

.card img {
    width: 100%;
    height: 80%;
}

.card button {
    border: none;
    outline: 0;
    padding: 1rem;
    color: white;
    background-color: #000000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    font-family: 'Balsamiq Sans', cursive;
}

.card button:hover {
    opacity: 0.7;
}

.compentences {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.compentences>h1 {
    grid-column: 1 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    font-family: 'Source Code Pro', monospace;
    color: #000000;
    font-size: 36px;
    font-weight: bold;
}

.first {
    grid-column: 1 / 2;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.first>ul>li {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-family: 'Balsamiq Sans', cursive;
    margin: 0.5rem;
    color: #000000;
    font-size: 16px;
    font-weight: normal;
}

.second {
    grid-column: 2 / 3;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.second>ul>li {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-family: 'Balsamiq Sans', cursive;
    margin: 0.5rem;
    color: #000000;
    font-size: 16px;
    font-weight: normal;
}

.second>ul>li>ul>li {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    font-family: 'Balsamiq Sans', cursive;
    margin: 0.5rem;
    color: #000000;
    font-size: 14px;
    font-weight: normal;
}
</style>