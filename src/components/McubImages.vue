<template>
    <section class="mcubimages">
        <img v-on:click="mcubmodal" id="mcubImg1" src="../img/mcub_home_1.png" alt="Home Page" style="width:100%;max-width:300px">
        <img v-on:click="mcubmodal" id="mcubImg2" src="../img/mcub_home_2.png" alt="Home Page" style="width:100%;max-width:300px">
        <img v-on:click="mcubmodal" id="mcubImg3" src="../img/mcub_about_1.png" alt="About Page" style="width:100%;max-width:300px">
        <img v-on:click="mcubmodal" id="mcubImg4" src="../img/mcub_about_2.png" alt="About Page" style="width:100%;max-width:300px">
        <img v-on:click="mcubmodal" id="mcubImg5" src="../img/mcub_about_3.png" alt="About Page" style="width:100%;max-width:300px">
        <img v-on:click="mcubmodal" id="mcubImg6" src="../img/mcub_career_1.png" alt="Career Page" style="width:100%;max-width:300px">
        <img v-on:click="mcubmodal" id="mcubImg7" src="../img/mcub_contact_1.png" alt="Contact Page" style="width:100%;max-width:300px">

        <div id="mcubModal" class="mcubmodal">
            <span class="mcubclose">&times;</span>
            <img class="mcub-modal-content" id="mcubimg01">
            <div id="mcubcaption"></div>
        </div>
    </section>
</template>

<script>

export default {
    methods: {
        mcubmodal: function () {
            var mcubmodal = document.getElementById("mcubModal");
            var mcubimg1 = document.getElementById("mcubImg1");
            var mcubimg2 = document.getElementById("mcubImg2");
            var mcubimg3 = document.getElementById("mcubImg3");
            var mcubimg4 = document.getElementById("mcubImg4");
            var mcubimg5 = document.getElementById("mcubImg5");
            var mcubimg6 = document.getElementById("mcubImg6");
            var mcubimg7 = document.getElementById("mcubImg7");
            var mcubmodalImg = document.getElementById("mcubimg01");
            var mcubcaptionText = document.getElementById("mcubcaption");
            mcubimg1.onclick = function(){
                mcubmodal.style.display = "block";
                mcubmodalImg.src = this.src;
                mcubcaptionText.innerHTML = this.alt;
            }
            mcubimg2.onclick = function(){
                mcubmodal.style.display = "block";
                mcubmodalImg.src = this.src;
                mcubcaptionText.innerHTML = this.alt;
            }
            mcubimg3.onclick = function(){
                mcubmodal.style.display = "block";
                mcubmodalImg.src = this.src;
                mcubcaptionText.innerHTML = this.alt;
            }
            mcubimg4.onclick = function(){
                mcubmodal.style.display = "block";
                mcubmodalImg.src = this.src;
                mcubcaptionText.innerHTML = this.alt;
            }
            mcubimg5.onclick = function(){
                mcubmodal.style.display = "block";
                mcubmodalImg.src = this.src;
                mcubcaptionText.innerHTML = this.alt;
            }
            mcubimg6.onclick = function(){
                mcubmodal.style.display = "block";
                mcubmodalImg.src = this.src;
                mcubcaptionText.innerHTML = this.alt;
            }
            mcubimg7.onclick = function(){
                mcubmodal.style.display = "block";
                mcubmodalImg.src = this.src;
                mcubcaptionText.innerHTML = this.alt;
            }

            var mcubspan = document.getElementsByClassName("mcubclose")[0];

            mcubspan.onclick = function() {
                mcubmodal.style.display = "none";
            }
        }
    }
}
</script>

<style>
    .mcubimages {
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

    #mcubImg1,
    #mcubImg2,
    #mcubImg3,
    #mcubImg4,
    #mcubImg5,
    #mcubImg6,
    #mcubImg7 {
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
        height: 10rem;
        margin: 0.1rem;
    }

    #mcubImg1:hover,
    #mcubImg2:hover,
    #mcubImg3:hover,
    #mcubImg4:hover,
    #mcubImg5:hover,
    #mcubImg6:hover,
    #mcubImg7:hover {
        opacity: 0.7;
    }

    .mcubmodal {
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

    .mcub-modal-content {
        margin: auto;
        display: block;
        width: 80%;
        max-width: 700px;
    }

    #mcubcaption {
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

    .mcub-modal-content, #mcubcaption {
        animation-name: zoom;
        animation-duration: 0.6s;
    }

    @keyframes zoom {
        from {transform: scale(0);}
        to {transform: scale(1);}
    }

    .mcubclose {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
    }

    .mcubclose:hover,
    .mcubclose:focus {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
    }

    @media only screen and (max-width: 700px) {
        .mcub-modal-content {
            width: 100%;
        }
    }
</style>