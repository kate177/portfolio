<template>
  <section class="work">
    <div
      class="work-top"
      @scroll="letsScrolle = true"
      :class="letsScrolle && 'animate__animated animate__fadeInDown'"
    >
      <div class="work-top__line"></div>
      <h2 class="work-top__title">{{ $t("work") }}</h2>
    </div>
    <div class="work-content">
      <div
        class="work-content__ferst"
        @scroll="letsScrolle = true"
        :class="letsScrolle && 'animate__animated animate__fadeInLeft'"
      >
        <div class="work-content__image work-content__imageRight">
          <img src="../assets/img/weather.jpg" alt="" />
        </div>
        <a href="https://kate177.github.io/vue-weather-app/" target="_blank">
          <div class="work-content__link">
            <h3 class="work-content__title content-title__ferst">
              {{ $t("link") }}
            </h3>
          </div>
        </a>
      </div>

      <div class="work-content__left">
        <div
          class="work-content__second"
          @scroll="letsScrolle = true"
          :class="letsScrolle && 'animate__animated animate__fadeInDown'"
        >
          <div class="work-content__image">
            <img src="../assets/img/starWars.jpg" alt="" />
          </div>
          <a href="https://kate177.github.io/star-wars/#/" target="_blank">
            <div class="work-content__link">
              <h3 class="work-content__title">{{ $t("link") }}</h3>
            </div>
          </a>
        </div>

        <div
          class="work-content__third"
          @scroll="letsScrolle = true"
          :class="letsScrolle && 'animate__animated animate__fadeInUp'"
        >
          <div class="work-content__image">
            <img src="../assets/img/harri.jpg" alt="" />
          </div>
          <a href="https://kate177.github.io/Harri-Potter/#/" target="_blank">
            <div class="work-content__link">
              <h3 class="work-content__title">{{ $t("link") }}</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      letsScrolle: false,
    };
  },
  mounted() {
    window.addEventListener(
      "scroll",
      (event) => (this.letsScrolle = window.scrollY > 1800)
    );
  },
};
</script>

<style lang="scss">
.work {
  width: 870px;
  margin: 0 auto;
  margin-top: 60px;
  padding-bottom: 100px;

  &-top {
    margin: 0 auto;
    margin-bottom: 55px;

    &__line {
      width: 140px;
      height: 2px;
      background-color: #feb639;
      margin: 0 auto;
      margin-bottom: 30px;
    }
    &__title {
      width: 480px;
      text-align: center;
      font-weight: 700;
      font-size: 40px;
      line-height: 47px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--app-title-color);
      margin: 0 auto;
    }
  }
  &-content {
    display: flex;
    &__ferst {
      width: 240px;
      height: 448px;
      background: linear-gradient(
        118.74deg,
        #db30ca 0%,
        rgba(51, 86, 210, 0.67) 100%
      );
      border-radius: 10px;
      margin-right: 30px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      &:hover .work-content__link {
        left: 0px;
      }
    }
    &__second {
      width: 600px;
      height: 209px;
      background: #e9e8d9;
      border-radius: 10px;
      margin-bottom: 30px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      &:hover .work-content__link {
        left: 0px;
      }
    }
    &__image {
      width: 330px;
      height: 100%;

      margin: 0 auto;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    &__imageRight {
      width: 170px;
      height: 200px;
    }
    &__link {
      position: absolute;
      display: flex;
      align-items: center;
      top: 0px;
      width: 100%;
      height: 100%;
      left: -100%;
      padding: 0px 10px 0px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background-color: #feb639;
      transition: left 0.5s;
    }
    &__title {
      text-align: center;
      width: 200px;
      font-weight: 700;
      font-size: 36px;
      line-height: 42px;
      letter-spacing: 0.1em;
      color: #ffffff;
      text-transform: uppercase;
      margin: 0 auto;
    }
    &__third {
      width: 600px;
      height: 209px;
      background: #0a0e11;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      &:hover .work-content__link {
        left: 0px;
      }
    }
  }
}
/*768px - 992px*/
@media screen and (max-width: 992px) {
  .work {
    width: 690px;
    &-content {
      flex-direction: column;
      width: 690px;
      &__ferst {
        width: 600px;
        height: 209px;
        margin: 0 auto;
        margin-bottom: 30px;
      }
      &__second {
        margin: 0 auto;
        margin-bottom: 30px;
      }
      &__third {
        margin: 0 auto;
      }
    }
  }
}
/*576px - 768px*/
@media screen and (max-width: 768px) {
  .work {
    width: 510px;
    &-content {
      width: 510px;
      &__ferst {
        width: 510px;
      }
      &__second {
        width: 510px;
      }
      &__third {
        width: 510px;
      }
    }
  }
}
/*0px - 576px*/
@media screen and (max-width: 576px) {
  .work {
    width: 90%;
    &-top {
      margin-bottom: 30px;
      &__line {
        margin-bottom: 20px;
      }
      &__title {
        width: 100%;
        font-size: 28px;
        text-align: center;
      }
    }
    &-content {
      width: 90%;
      &__ferst {
        width: 90%;
      }
      &__second {
        width: 90%;
      }
      &__third {
        width: 90%;
      }
      &__image {
        width: 200px;
        height: 180px;
      }
      &__title {
        width: 90%;
        font-weight: 700;
        font-size: 26px;
      }
    }
  }
}
</style>
