<template>
  <section>
      <WhoAmI />
      <Skills />
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