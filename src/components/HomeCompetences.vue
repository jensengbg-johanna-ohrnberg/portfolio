<template>
    <section>
        <h1>My Competences</h1>
        <section class="compentences">
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
    </section>
</template>

<style>
    .compentences {
        display: grid;
        grid-template-columns: 1fr 1fr;
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

    @media only screen and (max-width: 520px) {
        .compentences {
            display: grid;
            grid-template-columns: 1fr;
        }

        .first {
            grid-column: 1 / 2;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .second {
            grid-column: 1 / 3;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>