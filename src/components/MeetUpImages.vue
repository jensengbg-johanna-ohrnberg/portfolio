<template>
    <section class="meetimages">
        <img v-on:click="meetmodal" id="meetImg1" src="../img/meetup-home.png" alt="Home Page" style="width:100%;max-width:300px">
        <img v-on:click="meetmodal" id="meetImg2" src="../img/meetup-event.png" alt="Event Page" style="width:100%;max-width:300px">
        <img v-on:click="meetmodal" id="meetImg3" src="../img/meetup-signup.png" alt="Sign Up Page" style="width:100%;max-width:300px">
        <img v-on:click="meetmodal" id="meetImg4" src="../img/meetup-reviews.png" alt="Review Page" style="width:100%;max-width:300px">
        <div id="meetModal" class="meetmodal">
            <span class="meetclose">&times;</span>
            <img class="meet-modal-content" id="meetimg01">
            <div id="meetcaption"></div>
        </div>
    </section>
</template>

<script>

export default {
    methods: {
        meetmodal: function () {
            var meetmodal = document.getElementById("meetModal");
            var meetimg1 = document.getElementById("meetImg1");
            var meetimg2 = document.getElementById("meetImg2");
            var meetimg3 = document.getElementById("meetImg3");
            var meetimg4 = document.getElementById("meetImg4");
            var meetmodalImg = document.getElementById("meetimg01");
            var meetcaptionText = document.getElementById("meetcaption");
            meetimg1.onclick = function(){
                meetmodal.style.display = "block";
                meetmodalImg.src = this.src;
                meetcaptionText.innerHTML = this.alt;
            }
            meetimg2.onclick = function(){
                meetmodal.style.display = "block";
                meetmodalImg.src = this.src;
                meetcaptionText.innerHTML = this.alt;
            }
            meetimg3.onclick = function(){
                meetmodal.style.display = "block";
                meetmodalImg.src = this.src;
                meetcaptionText.innerHTML = this.alt;
            }
            meetimg4.onclick = function(){
                meetmodal.style.display = "block";
                meetmodalImg.src = this.src;
                meetcaptionText.innerHTML = this.alt;
            }

            var meetspan = document.getElementsByClassName("meetclose")[0];

            meetspan.onclick = function() {
                meetmodal.style.display = "none";
            }
        }
    }
}
</script>

<style>
    .meetimages {
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

    #meetImg1,
    #meetImg2,
    #meetImg3,
    #meetImg4 {
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
        height: 20rem;
        margin: 0.1rem;
    }

    #meetImg1:hover,
    #meetImg2:hover,
    #meetImg3:hover,
    #meetImg4:hover {
        opacity: 0.7;
    }

    .meetmodal {
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

    .meet-modal-content {
        margin: auto;
        display: block;
        width: 20rem;
        max-width: 700px;
        height: 30rem;
    }

    #meetcaption {
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

    .meet-modal-content, #meetcaption {
        animation-name: zoom;
        animation-duration: 0.6s;
    }

    @keyframes zoom {
        from {transform: scale(0);}
        to {transform: scale(1);}
    }

    .meetclose {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
    }

    .meetclose:hover,
    .meetclose:focus {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
    }

    @media only screen and (max-width: 700px) {
        .meetmodal-content {
            width: 100%;
        }
    }
</style>