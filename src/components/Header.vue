<template>
  <header class="header animate__animated animate__fadeInDown">
    <SwitchTheme />
    <SwitchLang />
  </header>
</template>

<script>
import SwitchTheme from "./SwitchTheme.vue";
import SwitchLang from "./SwitchLang.vue";
export default {
  components: {
    SwitchTheme,
    SwitchLang,
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  padding: 20px 0px;
  display: flex;
  justify-content: end;
  align-items: center;
}
</style>
