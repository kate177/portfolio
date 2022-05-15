<template>
  <section class="skills">
    <div class="wrapper">
      <div class="skills-header">
        <div
          class="skills-left"
          @scroll="letsScroll = true"
          :class="
            letsScroll && 'animate__animated animate__fadeInLeft displays'
          "
        >
          <div class="skills-left__line"></div>
          <h2 class="skills-left__title">{{ $t("skils") }}</h2>
        </div>
        <div
          class="skills-right"
          @scroll="letsScroll = true"
          :class="
            letsScroll && 'animate__animated animate__fadeInRight displays'
          "
        >
          <div class="skills-right__circle"></div>
        </div>
      </div>
      <div class="skills-lore">
        <div
          class="skills-top"
          @scroll="letsScrolls = true"
          :class="letsScrolls && 'animate__animated animate__fadeInRight'"
        >
          <div class="skills-block">
            <div class="skills-block__icon">
              <img src="../assets/img/skills/html.png" alt="" />
            </div>
            <ul class="skills-block__grade">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="skills-block">
            <div class="skills-block__icon">
              <img src="../assets/img/skills/css.png" alt="" />
            </div>
            <ul class="skills-block__grade">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="skills-block">
            <div class="skills-block__icon">
              <img src="../assets/img/skills/js.png" alt="" />
            </div>
            <ul class="skills-block__grade skills-block__for">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div
          class="skills-bottom"
          @scroll="letsScrolls = true"
          :class="letsScrolls && 'animate__animated animate__fadeInLeft'"
        >
          <div class="skills-block">
            <div class="skills-block__icon">
              <img src="../assets/img/skills/vue.png" alt="" />
            </div>
            <ul class="skills-block__grade skills-block__three">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="skills-block">
            <div class="skills-block__icon">
              <img src="../assets/img/skills/vuex.png" alt="" />
            </div>
            <ul class="skills-block__grade skills-block__three">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div class="skills-block">
            <div class="skills-block__icon">
              <img src="../assets/img/skills/figma.png" alt="" />
            </div>
            <ul class="skills-block__grade">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      letsScroll: false,
      letsScrolls: false,
    };
  },
  mounted() {
    window.addEventListener(
      "scroll",
      (event) => (this.letsScroll = window.scrollY > 650)
    );
    window.addEventListener(
      "scroll",
      (event) => (this.letsScrolls = window.scrollY > 1000)
    );
  },
};
</script>

<style lang="scss">
.skills {
  width: 100%;
  height: 100%;
  background-color: var(--app-background-color);
  padding: 80px 0px 0px 0px;
  &-header {
    margin-bottom: 150px;
    display: flex;
    justify-content: space-between;
  }
  &-left {
    display: none;
    &__line {
      width: 140px;
      height: 2px;
      background-color: #feb639;
      margin: 0px 0px 30px 24px;
    }
    &__title {
      width: 194px;
      text-align: center;
      font-weight: 600;
      font-size: 40px;
      line-height: 47px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--app-title-color);
    }
  }
  &-right {
    display: none;
    &__circle {
      width: 70px;
      height: 70px;
      border-radius: 100px;
      background: #feb639;
    }
  }
  &-lore {
    width: 770px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  &-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }
  &-bottom {
    display: flex;
    justify-content: space-between;
    margin-bottom: 150px;
  }
  &-block {
    width: 220px;
    height: 80px;
    background: var(--app-background-block);
    border: 1px solid #feb639;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    &__icon {
      width: 90px;
      height: 90px;
      background: #feb639;
      border-radius: 10px;
      margin: -30px 0px 20px 20px;
      & img {
        width: 80px;
        height: 80px;
        margin: 5px;
      }
    }
    &__grade {
      width: 70px;
      display: flex;
      justify-content: space-between;
      margin: 20px 20px 0px 20px;
      & li {
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background: #feb639;
      }
    }
    &__three {
      width: 40px;
      margin: 20px 50px 0px 20px;
    }
    &__for {
      width: 55px;
      margin: 20px 30px 0px 20px;
    }
  }
}
.displays {
  display: block;
}
/*768px - 992px*/
@media screen and (max-width: 992px) {
  .skills-lore {
    width: 690px;
  }
  .skills-block {
    width: 200px;
  }
  .skills-block__grade {
    margin: 20px 10px 0px 10px;
  }
  .skills-block__three {
    margin: 20px 40px 0px 10px;
  }
  .skills-block__for {
    margin: 20px 20px 0px 10px;
  }
}
/*576px - 768px*/
@media screen and (max-width: 768px) {
  .skills-header {
    margin-bottom: 100px;
  }
  .skills-lore {
    width: 510px;
    height: 500px;
    flex-direction: row;
    justify-content: space-between;
  }
  .skills-top {
    flex-direction: column;
    justify-content: space-between;
  }
  .skills-bottom {
    flex-direction: column;
    margin-bottom: 100px;
  }
}
/*0px - 576px*/
@media screen and (max-width: 576px) {
  .skills-header {
    margin-bottom: 80px;
  }
  .skills-left__line {
    margin: 0px 0px 20px 0px;
  }
  .skills-left__title {
    font-size: 32px;
  }
  .skills-right__circle {
    width: 45px;
    height: 45px;
  }
  .skills-lore {
    width: 90%;
    height: 100%;
    flex-wrap: wrap;
  }
  .skills-top {
    height: 350px;
    margin-right: 5px;
    margin-bottom: 50px;
  }
  .skills-bottom {
    height: 350px;
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 480px) {
  .skills-lore {
    margin: 0 auto;
    flex-direction: column;
    width: fit-content;
  }
}
</style>
