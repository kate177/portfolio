<template v-model="darkMode">
  <div class="header-theme" @click="onclickSwitch()">
    <div class="header-theme__moon">
      <img src="../assets/img/moon.png" alt="" />
    </div>
    <div class="header-theme__sun">
      <img src="../assets/img/sun.png" alt="" />
    </div>
    <div
      class="header-theme__circle"
      v-bind:class="{ 'active-switch': darkMode }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    onclickSwitch() {
      this.darkMode = !this.darkMode;
    },
  },
  mounted() {
    let htmlElement = document.documentElement;
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
      htmlElement.setAttribute("theme", "dark");
      this.darkMode = true;
    } else {
      htmlElement.setAttribute("theme", "light");
      this.darkMode = false;
    }
  },
  watch: {
    darkMode: function () {
      let htmlElement = document.documentElement;
      if (this.darkMode) {
        localStorage.setItem("theme", "dark");
        htmlElement.setAttribute("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        htmlElement.setAttribute("theme", "light");
      }
    },
  },
};
</script>

<style lang="scss">
.header-theme {
  width: 60px;
  height: 30px;
  border: 2px solid #feb639;
  border-radius: 70px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  margin-right: 40px;
  cursor: pointer;
  &__moon {
    width: 20px;
    height: 20px;
    margin: 3px 0px 3px 5px;
  }
  &__sun {
    width: 20px;
    height: 20px;
    margin: 3px 5px 3px 0px;
  }
  &__circle {
    position: absolute;
    width: 27px;
    height: 27px;
    border-radius: 30px;
    background: var(--app-background-circle);
    margin-left: 30px;
    margin-top: -0.5px;
  }
}
.active-switch {
  margin-left: 0px;
}
</style>
