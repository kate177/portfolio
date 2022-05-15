<template>
  <div class="wrapper">
    <Header />
    <Infa />
    <AboutMe />
  </div>
  <Skill />
  <div class="wrapper">
    <SomeWork />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Infa from "./components/Infa.vue";
import AboutMe from "./components/AboutMe.vue";
import Skill from "./components/Skill.vue";
import SomeWork from "./components/SomeWork.vue";

export default {
  components: {
    Header,
    Infa,
    AboutMe,
    Skill,
    SomeWork,
  },
};
</script>
