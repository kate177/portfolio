<template>
  <section class="infa">
    <div class="infa-background">
      <div class="infa-left animate__animated animate__fadeInLeft">
        <div class="infa-left__line"></div>
        <h1 class="infa-left__title">{{ $t("name") }}</h1>
        <p class="infa-left__subtitle">{{ $t("developer") }}</p>
        <ul class="infa-left__contacts">
          <li class="left-contacts__phone">
            <a href="tel:+375447633069"
              ><img src="../assets/img/phone.png" alt=""
            /></a>
          </li>
          <li class="left-contacts__in">
            <a
              href="https://www.linkedin.com/in/ekaterina-bondarenko-259a0a239/"
              target="_blank"
            >
              <img src="../assets/img/in.png" alt="" />
            </a>
          </li>
          <li class="left-contacts__mail">
            <a href="mailto:kate177intro@bk.ru"
              ><img src="../assets/img/mail.png" alt=""
            /></a>
          </li>
        </ul>
      </div>
      <div class="infa-right animate__animated animate__fadeInRight">
        <div class="infa-right__image">
          <img src="../assets/img/me1.jpg" alt="" />
        </div>
        <div class="infa-right__frame"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.infa {
  width: 100%;
  height: 100%;
  &-background {
    background: var(--app-background-color);
    border-radius: 10px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
  }
  &-left {
    margin: 173px 0px 0px 100px;
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
      margin: 30px 0px 40px;
    }
    &__subtitle {
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.1em;
      color: var(--app-text-color);
      margin-bottom: 90px;
    }
    &__contacts {
      width: 190px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & li {
        width: 40px;
        height: 40px;
        & img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  &-right {
    width: 450px;
    height: 620px;
    margin: 40px 70px -40px 0px;
    &__frame {
      position: relative;
      width: 240px;
      height: 502px;
      border: 2px solid #feb639;
      box-sizing: border-box;
      border-radius: 10px;
      margin: 118px 0px 0px 210px;
      z-index: 1;
    }
    &__image {
      position: absolute;
      z-index: 2;
      width: 400px;
      height: 600px;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      & img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
}

@media screen and (max-width: 1430px) {
  .infa-left {
    margin: 173px 0px 0px 70px;
  }
}
/*992px - 1200px*/
@media screen and (max-width: 1200px) {
  .infa-right {
    width: 420px;
    height: 600px;
    margin: 40px 50px -40px 0px;
    &__frame {
      width: 224px;
      height: 486px;
      margin: 114px 0px 0px 196px;
    }
    &__image {
      width: 373px;
      height: 580px;
    }
  }
}
/*768px - 992px*/
@media screen and (max-width: 992px) {
  .infa-background {
    flex-direction: column;
  }
  .infa-left {
    margin: 80px 0px 0px 50px;
  }
  .infa-left__subtitle {
    margin-bottom: 60px;
  }
  .infa-right {
    margin: 40px 0px -40px 200px;
  }
}

/*576px - 768px*/
@media screen and (max-width: 768px) {
  .infa-right {
    width: 400px;
    height: 580px;
    margin: 40px 0px -40px 70px;
    &__frame {
      width: 213px;
      height: 469px;
      margin: 111px 0px 0px 187px;
    }
    &__image {
      width: 355px;
      height: 561px;
    }
  }
}

/*0px - 576px*/
@media screen and (max-width: 576px) {
  .infa-left {
    margin: 80px 0px 0px 10px;
    &__title {
      font-size: 26px;
      margin: 30px 0px 30px;
    }
    &__subtitle {
      font-size: 18px;
      margin-bottom: 40px;
    }
    &__contacts {
      width: 160px;
      & li {
        width: 30px;
        height: 30px;
      }
    }
  }
  .infa-right {
    width: auto;
    height: 380px;
    margin: 0 auto;
    margin-top: 40px;
    &__frame {
      width: 127px;
      height: 304px;
      margin: 76px 0px 0px 100px;
    }
    &__image {
      width: 213px;
      height: 367px;
    }
  }
}
</style>
