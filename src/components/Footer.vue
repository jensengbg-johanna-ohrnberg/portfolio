<template>
    <section class="footer">
            <section>
                <h5>Visit Me</h5>
                <section>
                    <a href="https://www.linkedin.com/in/johanna-%C3%B6hrnberg-7a6b17196/" target="_blank"><img src="../img/linkedinLogo.png" alt="Linkedin Logo"></a>
                    <a href="https://github.com/jensengbg-johanna-ohrnberg" target="_blank"><img src="../img/githubLogo.png" alt="Github Logo"></a>
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
</template>

<style scoped>
    .footer {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: #B3F0FF;
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
</style>