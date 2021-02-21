<template>
    <section>
        <section class="webshop">
            <h1>Webshop</h1>
            <p>This is one of my websites I made in school. Check out the images below or go see the actual code at <a href="https://github.com/jensengbg-johanna-ohrnberg/webshop-grp-tdd" target="_blank">Github</a>.</p>
            <section class="image-container">
                <img v-on:click="lightbox" id="myImg1" src="../img/webshop-products.png" alt="Products Page" style="width:100%;max-width:300px">
                <img v-on:click="lightbox" id="myImg2" src="../img/webshop-filter.png" alt="Filter Products Page" style="width:100%;max-width:300px">
                <img v-on:click="lightbox" id="myImg3" src="../img/webshop-details.png" alt="Product Detail Page" style="width:100%;max-width:300px">
                <img v-on:click="lightbox" id="myImg4" src="../img/webshop-cart.png" alt="Cart Page" style="width:100%;max-width:300px">
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
                        The requirements were to develop a Vue-app with TDD, test-driven development.
                        We were supposed to work in a group of 3 to 5 people and use an agile working method.
                    </p>
                </article>
                <article>
                    <h3>Functionality:</h3>
                    <p>
                        We developed a webshop where you can buy soccer shoes.
                        In the application, the user was supposed to be able to see all the products available for sale,
                        filter between products, see a detailed description of each product,
                        add a product to the shopping cart, change quantity of a product and see the total price in there shopping cart.
                    </p>
                </article>
                <article>
                    <h3>My Thoughts:</h3>
                    <p>
                        I thought this was a challenging project because we were supposed to test the functionality with jest before we created the application.
                        The project required a different mindset, but worked out well in the end.
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
    .webshop>h1 {
    text-align: center;
    margin: 2rem;
    font-family: 'Source Code Pro', monospace;
    color: #000000;
    font-weight: bold;
    font-size: 48px;
}

.webshop>p {
    text-align: center;
    margin: 2rem;
    font-family: 'Balsamiq Sans', cursive;
    color: #000000;
    font-size: 16px;
}

.webshop>p>a {
    text-decoration: none;
    font-family: 'Balsamiq Sans', cursive;
    color: #000000;
    font-size: 16px;
}

.webshop>p>a:hover {
    text-decoration: underline;
    color: #41abe0;
}


/* Style the Image Used to Trigger the Modal */

.image-container {
    width: 80%;
    margin: auto;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
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
    height: 24rem;
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
    width: 20%;
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