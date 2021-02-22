<template>
    <section>
        <section class="airbean">
            <h1>Airbean</h1>
            <p>This is one of my websites I made in school. Check out the images below or go see the actual code at <a href="https://github.com/jensengbg-johanna-ohrnberg/airBean-by-IronPants" target="_blank">Github</a>.</p>
            <section class="image-container">
                <img v-on:click="lightbox" id="myImg1" src="../img/airbean-login.png" alt="Login Page" style="width:100%;max-width:300px">
                <img v-on:click="lightbox" id="myImg2" src="../img/airbean-menu.png" alt="Menu Page" style="width:100%;max-width:300px">
                <img v-on:click="lightbox" id="myImg3" src="../img/airbean-order.png" alt="Order Page" style="width:100%;max-width:300px">
                <img v-on:click="lightbox" id="myImg4" src="../img/airbean-done.png" alt="Complete Order Page" style="width:100%;max-width:300px">
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
                        This was a group assignment in school made with Vue.js.
                    </p>
                </article>
                <article>
                    <h3>Requirements:</h3>
                    <p>
                        The requirements were to build a single page application in Vue.js.
                        During the project we were supposed to use Vue-router and Vuex.
                        We recieved design requirements that we needed to follow.
                    </p>
                </article>
                <article>
                    <h3>Functionality:</h3>
                    <p>
                        We developed an application where it is possible to order coffee and have it delivered with a drone.
                        In the application, the user is supposed be able to order coffee, sign in to an account,
                        see the order history as well as the estimated delivery time until the coffee arrives.
                    </p>
                </article>
                <article>
                    <h3>My Thoughts:</h3>
                    <p>
                        I thought it was a fun project where I got to develop my skills in both Vue.js and Vuex.
                        It was also challenging as we got an api that we were supposed to use in our application.
                        It was my first time working with apis. Due to good team work we were able to fulfill the assignment.
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
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
        }
      }
  }
};
</script>

<style>
    .airbean>h1 {
    text-align: center;
    margin: 2rem;
    font-family: 'Source Code Pro', monospace;
    color: #000000;
    font-weight: bold;
    font-size: 48px;
}

.airbean>p {
    text-align: center;
    margin: 2rem;
    font-family: 'Balsamiq Sans', cursive;
    color: #000000;
    font-size: 16px;
}

.airbean>p>a {
    text-decoration: none;
    font-family: 'Balsamiq Sans', cursive;
    color: #000000;
    font-size: 16px;
}

.airbean>p>a:hover {
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
#myImg4 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    height: 10rem;
    margin: 0.12rem;
}

#myImg1:hover,
#myImg2:hover,
#myImg3:hover,
#myImg4:hover {
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
    width: 20rem;
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