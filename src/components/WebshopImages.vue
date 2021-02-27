<template>
    <section class="webimages">
        <img v-on:click="webmodal" id="webImg1" src="../img/webshop-products.png" alt="Products Page" style="width:100%;max-width:300px">
        <img v-on:click="webmodal" id="webImg2" src="../img/webshop-filter.png" alt="Filter Products Page" style="width:100%;max-width:300px">
        <img v-on:click="webmodal" id="webImg3" src="../img/webshop-details.png" alt="Product Detail Page" style="width:100%;max-width:300px">
        <img v-on:click="webmodal" id="webImg4" src="../img/webshop-cart.png" alt="Cart Page" style="width:100%;max-width:300px">
        <div id="webModal" class="webmodal">
            <span class="webclose">&times;</span>
            <img class="web-modal-content" id="webimg01">
            <div id="webcaption"></div>
        </div>
    </section>
</template>

<script>

export default {
    methods: {
        webmodal: function () {
            var webmodal = document.getElementById("webModal");
            var webimg1 = document.getElementById("webImg1");
            var webimg2 = document.getElementById("webImg2");
            var webimg3 = document.getElementById("webImg3");
            var webimg4 = document.getElementById("webImg4");
            var webmodalImg = document.getElementById("webimg01");
            var webcaptionText = document.getElementById("webcaption");
            webimg1.onclick = function(){
                webmodal.style.display = "block";
                webmodalImg.src = this.src;
                webcaptionText.innerHTML = this.alt;
            }
            webimg2.onclick = function(){
                webmodal.style.display = "block";
                webmodalImg.src = this.src;
                webcaptionText.innerHTML = this.alt;
            }
            webimg3.onclick = function(){
                webmodal.style.display = "block";
                webmodalImg.src = this.src;
                webcaptionText.innerHTML = this.alt;
            }
            webimg4.onclick = function(){
                webmodal.style.display = "block";
                webmodalImg.src = this.src;
                webcaptionText.innerHTML = this.alt;
            }

            var webspan = document.getElementsByClassName("webclose")[0];

            webspan.onclick = function() {
                webmodal.style.display = "none";
            }
        }
    }
}
</script>

<style>
    .webimages {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        margin: auto;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    #webImg1,
    #webImg2,
    #webImg3,
    #webImg4 {
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
        height: 20rem;
        margin: 0.1rem;
    }

    #webImg1:hover,
    #webImg2:hover,
    #webImg3:hover,
    #webImg4:hover {
        opacity: 0.7;
    }

    .webmodal {
        display: none;
        position: fixed;
        z-index: 1;
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.8);
    }

    .web-modal-content {
        margin: auto;
        display: block;
        width: 20rem;
        max-width: 700px;
        height: 30rem;
    }

    #webcaption {
        margin: auto;
        display: block;
        width: 80%;
        max-width: 700px;
        text-align: center;
        color: #ccc;
        font-weight: bold;
        font-family: 'Balsamiq Sans', cursive;
        padding: 10px 0;
        height: 150px;
    }

    .web-modal-content, #webcaption {
        animation-name: zoom;
        animation-duration: 0.6s;
    }

    @keyframes zoom {
        from {transform: scale(0);}
        to {transform: scale(1);}
    }

    .webclose {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
    }

    .webclose:hover,
    .webclose:focus {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
    }

    @media only screen and (max-width: 700px) {
        .webmodal-content {
            width: 100%;
        }
    }
</style>