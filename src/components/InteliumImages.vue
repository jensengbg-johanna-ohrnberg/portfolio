<template>
    <section class="images">
        <img v-on:click="modal" id="myImg1" src="../img/intelium_home_1.png" alt="Home Page" style="width:100%;max-width:300px">
        <img v-on:click="modal" id="myImg2" src="../img/intelium_home_2.png" alt="Home Page" style="width:100%;max-width:300px">
        <img v-on:click="modal" id="myImg3" src="../img/intelium_about_1.png" alt="About Page" style="width:100%;max-width:300px">
        <img v-on:click="modal" id="myImg4" src="../img/intelium_competences_1.png" alt="Competences Page" style="width:100%;max-width:300px">
        <img v-on:click="modal" id="myImg5" src="../img/intelium_career_1.png" alt="Career Page" style="width:100%;max-width:300px">
        <img v-on:click="modal" id="myImg6" src="../img/intelium_career_2.png" alt="Career Page" style="width:100%;max-width:300px">
        <img v-on:click="modal" id="myImg7" src="../img/intelium_career_3.png" alt="Career Page" style="width:100%;max-width:300px">

        <div id="myModal" class="modal">
            <span class="close">&times;</span>
            <img class="modal-content" id="img01">
            <div id="caption"></div>
        </div>
    </section>
</template>

<script>

export default {
    methods: {
        modal: function () {
            var modal = document.getElementById("myModal");
            var img2 = document.getElementById("myImg2");
            var img3 = document.getElementById("myImg3");
            var img4 = document.getElementById("myImg4");
            var img5 = document.getElementById("myImg5");
            var img6 = document.getElementById("myImg6");
            var img7 = document.getElementById("myImg7");
            var modalImg = document.getElementById("img01");
            var captionText = document.getElementById("caption");
            img2.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            img3.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            img4.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            img5.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            img6.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            img7.onclick = function(){
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
}
</script>

<style>
    .images {
        width: 80%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        margin: auto;
        margin-top: 2rem;
        margin-bottom: 2rem;
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
        height: 8rem;
        margin: 0.1rem;
    }

    #myImg1:hover,
    #myImg2:hover,
    #myImg3:hover,
    #myImg4:hover,
    #myImg5:hover,
    #myImg6:hover,
    #myImg7:hover {
        opacity: 0.7;
    }

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
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.9);
    }

    .modal-content {
        margin: auto;
        display: block;
        width: 80%;
        max-width: 700px;
    }

    #caption {
        margin: auto;
        display: block;
        width: 80%;
        max-width: 700px;
        text-align: center;
        color: #ccc;
        padding: 10px 0;
        height: 150px;
    }

    .modal-content, #caption {
        animation-name: zoom;
        animation-duration: 0.6s;
    }

    @keyframes zoom {
        from {transform: scale(0);}
        to {transform: scale(1);}
    }

    .close {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
    }

    .close:hover,
    .close:focus {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
    }

    @media only screen and (max-width: 700px) {
        .modal-content {
            width: 100%;
        }
    }
</style>