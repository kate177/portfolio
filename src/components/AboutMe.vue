<template>
  <section class="aboutMe">
    <div
      class="aboutMe-left"
      @scroll="letsScroll = true"
      :class="letsScroll && 'animate__animated animate__fadeInLeft'"
    >
      <div class="aboutMe-left__image">
        <img src="../assets/img/aboutMe.jpg" alt="" />
      </div>
      <div class="aboutMe-left__frame"></div>
    </div>
    <div
      class="aboutMe-right"
      @scroll="letsScroll = true"
      :class="letsScroll && 'animate__animated animate__fadeInRight'"
    >
      <div class="aboutMe-right__line"></div>
      <h2 class="aboutMe-right__title">{{ $t("aboutMe") }}</h2>
      <p class="aboutMe-right__subtitle">
        {{ $t("infa") }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      letsScroll: false,
    };
  },
  mounted() {
    window.addEventListener(
      "scroll",
      (event) => (this.letsScroll = window.scrollY > 650)
    );
  },
};
</script>

<style lang="scss">
.aboutMe {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  &-left {
    width: 500px;
    height: 580px;
    margin: 80px 0px;
    &__frame {
      position: relative;
      z-index: 1;
      width: 240px;
      height: 502px;
      border: 2px solid #feb639;
      box-sizing: border-box;
      border-radius: 10px;
      margin: 78px 260px 0px 0px;
    }
    &__image {
      position: absolute;
      z-index: 2;
      width: 450px;
      height: 560px;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      margin: 0px 0px 20px 50px;
      & img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
  &-right {
    width: 790px;
    margin: 233px 0px 0px 80px;
    &__line {
      width: 140px;
      height: 2px;
      background-color: #feb639;
    }
    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 47px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--app-title-color);
      margin: 30px 0px;
    }
    &__subtitle {
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.1em;
      color: var(--app-text-color);
    }
  }
}

/*992px - 1200px*/
@media screen and (max-width: 1200px) {
  .aboutMe-right {
    width: 370px;
    margin: 120px 0px 0px 40px;
  }
}

/*768px - 992px*/
@media screen and (max-width: 992px) {
  .aboutMe {
    flex-direction: column;
    &-left {
      order: 2;
      margin-left: auto;
    }
    &-right {
      order: 1;
      width: 600px;
    }
  }
}

/*576px - 768px*/
@media screen and (max-width: 768px) {
  .aboutMe-right {
    width: 500px;
    margin: 120px 0px 0px 10px;
  }
}

/*0px - 576px*/
@media screen and (max-width: 576px) {
  .aboutMe-left {
    width: auto;
    height: 300px;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 40px;
    &__frame {
      width: 122px;
      height: 222px;
      margin: 78px 128px 0px 0px;
    }
    &__image {
      width: 229px;
      height: 285px;
      margin: 0px 0px 15px 21px;
    }
  }
  .aboutMe-right {
    margin: 0 auto;
    width: auto;
    margin: 0 auto;
    margin-top: 80px;
    &__title {
      font-size: 38px;
      margin: 30px 0px;
    }
    &__subtitle {
      font-size: 21px;
    }
  }
}
</style>
