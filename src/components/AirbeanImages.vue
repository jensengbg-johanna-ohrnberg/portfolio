<template>
    <section class="airimages">
        <img v-on:click="airmodal" id="airImg1" src="../img/airbean-login.png" alt="Login Page" style="width:100%;max-width:300px">
        <img v-on:click="airmodal" id="airImg2" src="../img/airbean-menu.png" alt="Menu Page" style="width:100%;max-width:300px">
        <img v-on:click="airmodal" id="airImg3" src="../img/airbean-order.png" alt="Order Page" style="width:100%;max-width:300px">
        <img v-on:click="airmodal" id="airImg4" src="../img/airbean-done.png" alt="Complete Order Page" style="width:100%;max-width:300px">
        <div id="airModal" class="airmodal">
            <span class="airclose">&times;</span>
            <img class="air-modal-content" id="airimg01">
            <div id="aircaption"></div>
        </div>
    </section>
</template>

<script>

export default {
    methods: {
        airmodal: function () {
            var airmodal = document.getElementById("airModal");
            var airimg1 = document.getElementById("airImg1");
            var airimg2 = document.getElementById("airImg2");
            var airimg3 = document.getElementById("airImg3");
            var airimg4 = document.getElementById("airImg4");
            var airmodalImg = document.getElementById("airimg01");
            var aircaptionText = document.getElementById("aircaption");
            airimg1.onclick = function(){
                airmodal.style.display = "block";
                airmodalImg.src = this.src;
                aircaptionText.innerHTML = this.alt;
            }
            airimg2.onclick = function(){
                airmodal.style.display = "block";
                airmodalImg.src = this.src;
                aircaptionText.innerHTML = this.alt;
            }
            airimg3.onclick = function(){
                airmodal.style.display = "block";
                airmodalImg.src = this.src;
                aircaptionText.innerHTML = this.alt;
            }
            airimg4.onclick = function(){
                airmodal.style.display = "block";
                airmodalImg.src = this.src;
                aircaptionText.innerHTML = this.alt;
            }

            var airspan = document.getElementsByClassName("airclose")[0];

            airspan.onclick = function() {
                airmodal.style.display = "none";
            }
        }
    }
}
</script>

<style>
    .airimages {
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

    #airImg1,
    #airImg2,
    #airImg3,
    #airImg4 {
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
        height: 20rem;
        margin: 0.1rem;
    }

    #airImg1:hover,
    #airImg2:hover,
    #airImg3:hover,
    #airImg4:hover {
        opacity: 0.7;
    }

    .airmodal {
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

    .air-modal-content {
        margin: auto;
        display: block;
        width: 20rem;
        max-width: 700px;
        height: 30rem;
    }

    #aircaption {
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

    .air-modal-content, #aircaption {
        animation-name: zoom;
        animation-duration: 0.6s;
    }

    @keyframes zoom {
        from {transform: scale(0);}
        to {transform: scale(1);}
    }

    .airclose {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
    }

    .airclose:hover,
    .airclose:focus {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
    }

    @media only screen and (max-width: 700px) {
        .airmodal-content {
            width: 100%;
        }
    }
</style>