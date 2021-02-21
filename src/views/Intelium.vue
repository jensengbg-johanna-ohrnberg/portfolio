<template>
    <section>
        <section class="intelium">
            <h1>Intelium Engineering AB</h1>
            <p>This is one of my websites I made for my internship. Check out the images below or visit the actual website at <a href="http://www.intelium.se/" target="_blank">www.intelium.se</a>.</p>
            <section class="image-container">
                <img v-on:click="lightbox" id="myImg1" src="../img/intelium_home_1.png" alt="Home Page" style="width:100%;max-width:300px">
                <img v-on:click="lightbox" id="myImg2" src="../img/intelium_home_2.png" alt="Home Page Competence Area" style="width:100%;max-width:300px">
                <img v-on:click="lightbox" id="myImg3" src="../img/intelium_about_1.png" alt="About Page" style="width:100%;max-width:300px">
                <img v-on:click="lightbox" id="myImg4" src="../img/intelium_competences_2.png" alt="Competence Page Simulation Area" style="width:100%;max-width:300px">
                <img v-on:click="lightbox" id="myImg5" src="../img/intelium_career_1.png" alt="Career Page" style="width:100%;max-width:300px">
                <img v-on:click="lightbox" id="myImg6" src="../img/intelium_career_2.png" alt="Career Page Available Job Info" style="width:100%;max-width:300px">
                <img v-on:click="lightbox" id="myImg7" src="../img/intelium_career_3.png" alt="Career Page Spontaneous Application Form" style="width:100%;max-width:300px">
            </section>

            <!-- The Modal -->
            <div id="myModal" class="modal">

                <!-- The Close Button -->
                <span class="close">&times;</span>

                <!-- Modal Content (The Image) -->
                <img class="modal-content" id="img01">

                <!-- Modal Caption (Image Text) -->
                <div id="caption"></div>
            </div>
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
        </section>
        <Footer />
    </section>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Footer
  },
  methods: {
      lightbox: function () {
        var modal = document.getElementById("myModal");
        var img1 = document.getElementById("myImg1");
        var img2 = document.getElementById("myImg2");
        var img3 = document.getElementById("myImg3");
        var img4 = document.getElementById("myImg4");
        var img5 = document.getElementById("myImg5");
        var img6 = document.getElementById("myImg6");
        var img7 = document.getElementById("myImg7");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img1.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        img2.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        img3.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        img4.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        img5.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        img6.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        img7.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
        }
      }
  }
};
</script>

<style>
    .intelium>h1 {
    text-align: center;
    margin: 2rem;
    font-family: 'Source Code Pro', monospace;
    color: #000000;
    font-weight: bold;
    font-size: 48px;
}

.intelium>p {
    text-align: center;
    margin: 2rem;
    font-family: 'Balsamiq Sans', cursive;
    color: #000000;
    font-size: 16px;
}

.intelium>p>a {
    text-decoration: none;
    font-family: 'Balsamiq Sans', cursive;
    color: #000000;
    font-size: 16px;
}

.intelium>p>a:hover {
    text-decoration: underline;
    color: #41abe0;
}


/* Style the Image Used to Trigger the Modal */

.image-container {
    width: 80%;
    margin: auto;
    margin-bottom: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}

#myImg1,
#myImg2,
#myImg3,
#myImg4,
#myImg5,
#myImg6,
#myImg7 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    height: 10rem;
    margin: 0.12rem;
}

#myImg1:hover,
#myImg2:hover,
#myImg3:hover,
#myImg4:hover,
#myImg5:hover,
#myImg6:hover,
#myImg7:hover {
    opacity: 0.4;
}


/* The Modal (background) */

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(214, 250, 255);
}


/* Modal Content (Image) */

.modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
}


/* Caption of Modal Image (Image Text) - Same Width as the Image */

#caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    font-family: 'Source Code Pro', monospace;
    color: #000000;
    font-weight: bold;
    padding: 10px 0;
}


/* Add Animation - Zoom in the Modal */

.modal-content,
#caption {
    animation-name: zoom;
    animation-duration: 0.6s;
}

@keyframes zoom {
    from {
        transform: scale(0)
    }
    to {
        transform: scale(1)
    }
}


/* The Close Button */

.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #000000;
    font-size: 52px;
    font-weight: bold;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    color: #41abe0;
    text-decoration: none;
    cursor: pointer;
}

.info {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.info>article {
    width: 20rem;
    height: 20rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 2rem;
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
    line-height: 22px;
    margin: 1rem;
}


/* 100% Image Width on Smaller Screens */

@media only screen and (max-width: 700px) {
    .modal-content {
        width: 100%;
    }
}
</style>