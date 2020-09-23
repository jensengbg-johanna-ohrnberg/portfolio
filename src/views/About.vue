<template>
  <section>
    <Info />
    <section class="questions">
      <MyGoal />
      <Strengths />
    </section>
    <Cv class="cv" />
  </section>
</template>

<script>
import Info from "../components/Info"
import MyGoal from "../components/MyGoal.vue"
import Cv from "../components/Cv.vue"
import Strengths from "../components/Strengths.vue"

export default {
  name: "About",
  components: {
    Info,
    MyGoal,
    Cv,
    Strengths
  }
}
</script>

<style scoped>
  .questions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
  }

  .cv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    .questions {
      flex-direction: column;
    }
  }
</style>