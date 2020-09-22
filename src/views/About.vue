<template>
  <section>
    <Info />
    <MyGoal />
    <Strengths />
    <WhyHireMe />
  </section>
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