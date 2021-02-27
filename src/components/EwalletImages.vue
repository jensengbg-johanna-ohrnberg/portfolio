<template>
    <section class="wallimages">
        <img v-on:click="wallmodal" id="wallImg1" src="../img/e-wallet-add-cards.png" alt="Add Cards Page" style="width:100%;max-width:300px">
        <img v-on:click="wallmodal" id="wallImg2" src="../img/e-wallet-cards.png" alt="Card Page" style="width:100%;max-width:300px">
        <div id="wallModal" class="wallmodal">
            <span class="wallclose">&times;</span>
            <img class="wall-modal-content" id="wallimg01">
            <div id="wallcaption"></div>
        </div>
    </section>
</template>

<script>

export default {
    methods: {
        wallmodal: function () {
            var wallmodal = document.getElementById("wallModal");
            var wallimg1 = document.getElementById("wallImg1");
            var wallimg2 = document.getElementById("wallImg2");
            var wallmodalImg = document.getElementById("wallimg01");
            var wallcaptionText = document.getElementById("wallcaption");
            wallimg1.onclick = function(){
                wallmodal.style.display = "block";
                wallmodalImg.src = this.src;
                wallcaptionText.innerHTML = this.alt;
            }
            wallimg2.onclick = function(){
                wallmodal.style.display = "block";
                wallmodalImg.src = this.src;
                wallcaptionText.innerHTML = this.alt;
            }

            var wallspan = document.getElementsByClassName("wallclose")[0];

            wallspan.onclick = function() {
                wallmodal.style.display = "none";
            }
        }
    }
}
</script>

<style>
    .wallimages {
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

    #wallImg1,
    #wallImg2 {
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
        height: 20rem;
        margin: 0.1rem;
    }

    #wallImg1:hover,
    #wallImg2:hover {
        opacity: 0.7;
    }

    .wallmodal {
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

    .wall-modal-content {
        margin: auto;
        display: block;
        width: 20rem;
        max-width: 700px;
        height: 30rem;
    }

    #wallcaption {
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

    .wall-modal-content, #wallcaption {
        animation-name: zoom;
        animation-duration: 0.6s;
    }

    @keyframes zoom {
        from {transform: scale(0);}
        to {transform: scale(1);}
    }

    .wallclose {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
    }

    .wallclose:hover,
    .wallclose:focus {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
    }

    @media only screen and (max-width: 700px) {
        .wallmodal-content {
            width: 100%;
        }
    }
</style>