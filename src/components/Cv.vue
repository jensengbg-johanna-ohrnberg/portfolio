<template>
    <section class="cv-section">
        <section class="left">
            <img src="../img/mig.png" alt="Image of myself">
            <h4>Profile</h4>
            <p>I am a great team player who constantly wants to develop.
                I am ready to take on new challenges and I'm happy to contribute with my knowledge.
                With all the skills I gained during my education, I want to continue develop together with your team.
            </p>
            <h4>Contact</h4>
            <h6>Phone Number:</h6>
            <p>0703 - 73 43 20</p>
            <h6>Email:</h6>
            <p>j-ohrnberg@live.se</p>
            <h4>Websites</h4>
            <a href="https://www.linkedin.com/in/johanna-%C3%B6hrnberg-7a6b17196/" target="_blank">Linkedin</a>
            <a href="https://github.com/jensengbg-johanna-ohrnberg" target="_blank">Github</a>
            <h4>Languages</h4>
            <p>Swedish - Native</p>
            <p>English - Fluent</p>
            <h4>Other Qualifications</h4>
            <p>1. Played college soccer in the USA where I got a "Honorable Mention" award for my achievement.</p>
            <p>2. Play soccer in Göteborg FF.</p>
            <p>3. Play ice hockey in Hovås HC.</p>
            <h4>References</h4>
            <p>Provided on request.</p>
        </section>
        <section class="right">
            <h1>Johanna Öhrnberg</h1>
            <h4>Front-End Developer Seeking a New Challenge</h4>
            <h3>Education</h3>
            <h6>Jensen Yrkeshögskola</h6>
            <p>August 2019 - June 2021</p>
            <p>An education with a focus on web development.
                Fun and challenging education.
                Got to learn many new languages and frameworks.
                The education ended with an educative internship.
            </p>
            <h6>University of Gothenburg</h6>
            <p>August 2017 - October 2018</p>
            <p>An education with a focus on the ocean.
                A mix between biology, geology, chemistry and oceanography.
                Developed my ability to work together as a team and learned to plan my time well.
            </p>
            <h6>Averett University</h6>
            <p>August 2013 - May 2017</p>
            <p>An exciting education where I developed my communication skills and my English language skills.</p>
            <h3>Work Experience</h3>
            <h6>Intelium Engineering AB - Front-End Developer</h6>
            <p>November 2020 - now</p>
            <p>This is an internship that is the last part of my education.
                Here I have created a website and I am doing at least one more for their company.
                Techniques used are HTML, CSS, JavaScript, PHP and MySQL.
                Challenging and educational.
            </p>
            <h6>Lekia - Shop Assistant</h6>
            <p>November 2018 - now</p>
            <p>In this workplace, I have learned to handle customers, all with different requirements and wishes.
                Large focus on service and accuracy.
            </p>
            <h6>ICA Kvantum - Shop Assistant</h6>
            <p>November 2018 - now</p>
            <p>Customer service, inventory and sorting of goods.
                Teamwork.
            </p>
            <h3 class="qualifications">Qualifications</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Vue.js</li>
                <li>Node.js</li>
                <li>PHP</li>
                <li>MySQL Databases</li>
                <li>CI/CD</li>
                <li>Parcel</li>
                <li>Docker</li>
                <li>Design - Figma, UX-Design, UI-Design</li>
                <li>TDD - Jest</li>
                <li>Agile Methods - Scrum, Kanban</li>
            </ul>
        </section>
    </section>
</template>

<style>
    .cv-section {
        display: grid;
        grid-template-columns: 40% 60%;
        margin: auto;
        margin-top: 2rem;
        margin-bottom: 2rem;
        width: 80%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-top-left-radius: 100px 100px;
        border-bottom-right-radius: 100px 100px;
    }

    .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        grid-column: 1 / 2;
        width: 80%;
        background-color: #d1d1d1;
        padding: 2rem;
        margin: 1rem;
        border-top-left-radius: 100px 100px;
        border-bottom-right-radius: 100px 100px;
    }

    .left>img {
        display: block;
        margin: auto;
        margin-top: 2rem;
        margin-bottom: 2rem;
        height: 10rem;
    }

    .left>h4 {
        font-family: 'Source Code Pro', monospace;
        color: #41abe0;
        font-weight: bold;
        font-size: 14px;
        margin: 1rem;
    }

    .left>h6 {
        font-family: 'Source Code Pro', monospace;
        color: #000000;
        font-weight: bold;
        font-size: 12px;
    }

    .left>p {
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        margin: 0;
    }

    .left>a {
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-weight: normal;
        font-size: 12px;
        text-decoration: underline;
        line-height: 20px;
    }

    .left>a:hover {
        color: #41abe0;
    }

    .left>ul>li,
    .left>ul>li>ul>li {
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-weight: normal;
        font-size: 12px;
        list-style: none;
        line-height: 20px;
    }

    .right {
        grid-column: 2 / 3;
        padding: 2rem;
        margin: auto;
        width: 80%;
    }

    .right>h1 {
        font-family: 'Source Code Pro', monospace;
        font-size: 36px;
        margin: 1rem;
        margin-bottom: 0.5rem;
        margin-left: 0;
        text-align: start;
    }

    .right>h3 {
        font-family: 'Source Code Pro', monospace;
        font-size: 18px;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }

    .right>h4 {
        font-family: 'Balsamiq Sans', cursive;
        font-size: 14px;
        margin-bottom: 1rem;
        text-align: start;
    }

    .right>h6 {
        font-family: 'Balsamiq Sans', cursive;
        font-size: 14px;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }

    .right>p {
        font-family: 'Balsamiq Sans', cursive;
        font-size: 12px;
        line-height: 20px;
        margin: 0;
        width: 100%;
    }

    .right>ul>li {
        font-family: 'Balsamiq Sans', cursive;
        font-size: 12px;
        list-style: none;
        line-height: 20px;
    }

    @media only screen and (max-width: 840px) {
        .cv-section {
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 50rem 65rem;
            width: 80%;
        }

        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            width: 100%;
            padding: 0;
            margin: 0;
        }

        .right {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            width: 100%;
            padding-top: 0;
            margin-top: 0;
        }
    }

    @media only screen and (max-width: 720px) {
        .cv-section {
            grid-template-rows: 50rem 70rem;
            width: 80%;
        }

        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            width: 100%;
            padding: 0;
            margin: 0;
        }

        .right {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            width: 100%;
            padding-top: 0;
            margin-top: 0;
        }
    }

    @media only screen and (max-width: 580px) {
        .cv-section {
            grid-template-rows: 50rem 75rem;
            width: 80%;
        }

        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            width: 100%;
            padding: 0;
            margin: 0;
        }

        .right {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            width: 100%;
            padding-top: 0;
            margin-top: 0;
        }
    }

    @media only screen and (max-width: 530px) {
        .cv-section {
            grid-template-rows: 50rem 80rem;
            width: 80%;
        }

        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            width: 100%;
            padding: 0;
            margin: 0;
        }

        .right {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            width: 100%;
            padding-top: 0;
            margin-top: 0;
        }
    }

    @media only screen and (max-width: 530px) {
        .cv-section {
            grid-template-rows: 50rem 75rem;
            width: 100%;
        }

        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            width: 100%;
            padding: 0;
            margin: 0;
        }

        .right {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            width: 100%;
            padding-top: 0;
            margin-top: 0;
        }
    }

    @media only screen and (max-width: 425px) {
        .cv-section {
            grid-template-rows: 50rem 80rem;
            width: 100%;
        }

        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            width: 100%;
            padding: 0;
            margin: 0;
        }

        .right {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            width: 100%;
            padding-top: 0;
            margin-top: 0;
        }
    }

    @media only screen and (max-width: 370px) {
        .cv-section {
            grid-template-rows: 55rem 85rem;
            width: 100%;
        }

        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            width: 100%;
            padding: 0;
            margin: 0;
        }

        .right {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            width: 100%;
            padding-top: 0;
            margin-top: 0;
        }
    }

    @media only screen and (max-width: 345px) {
        .cv-section {
            grid-template-rows: 55rem 90rem;
            width: 100%;
        }

        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            width: 100%;
            padding: 0;
            margin: 0;
        }

        .right {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            width: 100%;
            padding-top: 0;
            margin-top: 0;
        }
    }

    @media only screen and (max-width: 320px) {
        .cv-section {
            grid-template-rows: 55rem 95rem;
            width: 100%;
        }

        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            width: 100%;
            padding: 0;
            margin: 0;
        }

        .right {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            width: 100%;
            padding-top: 0;
            margin-top: 0;
        }
    }

    @media only screen and (max-width: 282px) {
        .cv-section {
            grid-template-rows: 55rem 100rem;
            width: 100%;
        }

        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            width: 100%;
            padding: 0;
            margin: 0;
        }

        .right {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            width: 100%;
            padding-top: 0;
            margin-top: 0;
        }
    }
</style>