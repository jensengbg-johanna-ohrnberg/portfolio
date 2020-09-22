<template>
  <section class="home">
    <WhoAmI class="who-am-i" />
    <Skills class="skills" />
  </section>
</template>

<script>
import WhoAmI from "../components/WhoAmI.vue"
import Skills from "../components/Skills.vue"

export default {
  name: "Home",
  components: {
    WhoAmI,
    Skills
  }
};
</script>

<style scoped>

  /*.home {
    display: grid;
    grid-template-rows: 25em 35em;
  }

  .who-am-i {
    grid-row: 1 / 2;
  }

  .skills {
    grid-row: 2 / 3;
  }*/
</style>