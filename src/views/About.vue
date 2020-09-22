<template>
  <div class="about">
    <Info class="info" />
    <section class="questions">
      <MyGoal class="my-goal" />
      <Strengths />
      <WhyHireMe />
    </section>
  </div>
</template>

<script>
import Info from "../components/Info"
import MyGoal from "../components/MyGoal.vue"
import Strengths from "../components/Strengths.vue"
import WhyHireMe from "../components/WhyHireMe.vue"

export default {
  name: "About",
  components: {
    Info,
    MyGoal,
    Strengths,
    WhyHireMe
  }
}
</script>

<style scoped>
  .questions {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  /*Tablets*/
    @media only screen and (min-width: 600px) {
      .questions {
        flex-direction: row;
      }
    }
  /*.about {
    display: grid;
    grid-template-rows: 54em 46em 20em 20em 20em;
  }

  .info {
    grid-row: 1 / 2;
  }

  .early-life {
    grid-row: 2 / 3;
  }

  .strengths {
    grid-row: 3 / 4;
  }

  .my-goal {
    grid-row: 4 / 5;
  }

  .next-step {
    grid-row: 5 / 6;
  }*/
</style>