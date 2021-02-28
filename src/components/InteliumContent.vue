<template>
    <section class="info">
        <article>
            <h3>Type:</h3>
            <p>
                A website made with HTML, CSS, JavaScript, PHP and MYSQL Databases.
            </p>
        </article>
        <article>
            <h3>Requirements:</h3>
            <p>
                The requirements was to come up with different design ideas and then create the website individually with inputs from my colleauges.
            </p>
        </article>
        <article>
            <h3>Functionality:</h3>
            <p>
                The users can read about Intelium and the competences they have.
                They can then browse for available jobs and apply to different jobs.
                They can also send a spontaneous application if they don't find what they are looking for.
            </p>
        </article>
        <article>
            <h3>My Thoughts:</h3>
            <p>
                This was a challenging but fun experience helping Intelium with their website.
                It was my first published website outside the classroom.
                I got to learn how to work with PHP and MySQL Databases which I never done before.
                It was challenging sometimes but with help from colleauges and the internet I managed to complete the website.
            </p>
        </article>
    </section>
</template>

<style>
    .info {
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .info>article {
        width: 20rem;
        height: 20rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        margin: 1rem;
        padding: 1rem;
        text-align: center;
    }

    .info>article>h3 {
        text-align: center;
        font-family: 'Source Code Pro', monospace;
        color: #000000;
        font-weight: bold;
        font-size: 24px;
    }

    .info>article>p {
        text-align: start;
        font-family: 'Balsamiq Sans', cursive;
        color: #000000;
        font-size: 14px;
        padding: 1rem;
        width: 100%;
    }



    @media only screen and (max-width: 430px) {
        .info>article {
            width: 100%;
            height: 100%;
        }
    }
</style>