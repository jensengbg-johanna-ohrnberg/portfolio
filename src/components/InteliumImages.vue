<template>
    <section class="intimages">
        <img v-on:click="intmodal" id="intImg1" src="../img/intelium_home_1.png" alt="Home Page" style="width:100%;max-width:300px">
        <img v-on:click="intmodal" id="intImg2" src="../img/intelium_home_2.png" alt="Home Page" style="width:100%;max-width:300px">
        <img v-on:click="intmodal" id="intImg3" src="../img/intelium_about_1.png" alt="About Page" style="width:100%;max-width:300px">
        <img v-on:click="intmodal" id="intImg4" src="../img/intelium_competences_1.png" alt="Competences Page" style="width:100%;max-width:300px">
        <img v-on:click="intmodal" id="intImg5" src="../img/intelium_career_1.png" alt="Career Page" style="width:100%;max-width:300px">
        <img v-on:click="intmodal" id="intImg6" src="../img/intelium_career_2.png" alt="Career Page" style="width:100%;max-width:300px">
        <img v-on:click="intmodal" id="intImg7" src="../img/intelium_career_3.png" alt="Career Page" style="width:100%;max-width:300px">

        <div id="intModal" class="intmodal">
            <span class="intclose">&times;</span>
            <img class="int-modal-content" id="intimg01">
            <div id="intcaption"></div>
        </div>
    </section>
</template>

<script>

export default {
    methods: {
        intmodal: function () {
            var intmodal = document.getElementById("intModal");
            var intimg1 = document.getElementById("intImg1");
            var intimg2 = document.getElementById("intImg2");
            var intimg3 = document.getElementById("intImg3");
            var intimg4 = document.getElementById("intImg4");
            var intimg5 = document.getElementById("intImg5");
            var intimg6 = document.getElementById("intImg6");
            var intimg7 = document.getElementById("intImg7");
            var intmodalImg = document.getElementById("intimg01");
            var intcaptionText = document.getElementById("intcaption");
            intimg1.onclick = function(){
                intmodal.style.display = "block";
                intmodalImg.src = this.src;
                intcaptionText.innerHTML = this.alt;
            }
            intimg2.onclick = function(){
                intmodal.style.display = "block";
                intmodalImg.src = this.src;
                intcaptionText.innerHTML = this.alt;
            }
            intimg3.onclick = function(){
                intmodal.style.display = "block";
                intmodalImg.src = this.src;
                intcaptionText.innerHTML = this.alt;
            }
            intimg4.onclick = function(){
                intmodal.style.display = "block";
                intmodalImg.src = this.src;
                intcaptionText.innerHTML = this.alt;
            }
            intimg5.onclick = function(){
                intmodal.style.display = "block";
                intmodalImg.src = this.src;
                intcaptionText.innerHTML = this.alt;
            }
            intimg6.onclick = function(){
                intmodal.style.display = "block";
                intmodalImg.src = this.src;
                intcaptionText.innerHTML = this.alt;
            }
            intimg7.onclick = function(){
                intmodal.style.display = "block";
                intmodalImg.src = this.src;
                intcaptionText.innerHTML = this.alt;
            }

            var intspan = document.getElementsByClassName("intclose")[0];

            intspan.onclick = function() {
                intmodal.style.display = "none";
            }
        }
    }
}
</script>

<style>
    .intimages {
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

    #intImg1,
    #intImg2,
    #intImg3,
    #intImg4,
    #intImg5,
    #intImg6,
    #intImg7 {
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
        height: 10rem;
        margin: 0.1rem;
    }

    #intImg1:hover,
    #intImg2:hover,
    #intImg3:hover,
    #intImg4:hover,
    #intImg5:hover,
    #intImg6:hover,
    #intImg7:hover {
        opacity: 0.7;
    }

    .intmodal {
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

    .int-modal-content {
        margin: auto;
        display: block;
        width: 80%;
        max-width: 700px;
    }

    #intcaption {
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

    .int-modal-content, #intcaption {
        animation-name: zoom;
        animation-duration: 0.6s;
    }

    @keyframes zoom {
        from {transform: scale(0);}
        to {transform: scale(1);}
    }

    .intclose {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
    }

    .intclose:hover,
    .intclose:focus {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
    }

    @media only screen and (max-width: 700px) {
        .int-modal-content {
            width: 100%;
        }
    }
</style>