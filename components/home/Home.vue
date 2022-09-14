<script lang="ts">
import Vue from 'vue'
import lottie from 'lottie-web'

export default({
  name: 'HomeCompoent',
  methods: {},
  components: {
    lottie,
  },
  mounted() {
    lottie.loadAnimation({
      container: <HTMLElement>this.$refs.lavContainer, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets1.lottiefiles.com/packages/lf20_ca8zbrdk.json',
    }),
      lottie.loadAnimation({
        container: <HTMLElement>this.$refs.smallContainer, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets1.lottiefiles.com/packages/lf20_ca8zbrdk.json',
      })
  },
})
</script>

<template>
  <div class="home-layout">
    <div class="small-home-animation">
      <div class="mobile-home-animation" ref="smallContainer"></div>
    </div>

    <div class="home-wrapper">
      <h1 class="home-primary-text">
        Nepalese Scientific-Academic & Professional Panel In Denmark
      </h1>
      <h1 class="home-secondary-text">
        Our vision is to help the new-comers both students and professional with
        the relvant information regarding accomodation, guidance to understand
        Danish laws, and procedures to apply the job and others.
      </h1>

      <div class="home-button">
        <a href="#" class="new-comers-button">New Comers</a>

        <a href="#" class="joinus-button">Join Us</a>
      </div>
    </div>

    <div class="large-home-animation">
      <div class="default-home-animation" ref="lavContainer"></div>

    </div>
  </div>
</template>


<style>

.default-home-animation {
 width: 500px;
 height: 500px;
}

.small-home-animation {
  display: none;
}

.home-layout {
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0 auto;
}

.home-wrapper {
  max-width: 45.3125rem;
  margin: 0 auto;
  padding: 0 0 0 3.8rem;
}

.home-primary-text {
  font-size: 2.5rem;
  line-height: 3.5rem;
}

.home-secondary-text {
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 2.5rem;
}

.joinus-button {
  margin-right: 1.25rem;
  background-color: white;
  color: rgb(18 29 51);
  border: 1px solid white;
  border-radius: 0.5rem;
  font-size: 16px;
  font-weight: 500;
  padding: 0.625rem 0.875rem;
  cursor: pointer;
  letter-spacing: 0.01em;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.new-comers-button {
  margin-right: 1.25rem;
  background-color: rgb(12 108 242);
  color: white;
  border: 3px solid rgb(12 108 242);
  border-radius: 0.5rem;
  font-size: 16px;
  font-weight: 500;
  padding: 0.625rem 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  white-space: nowrap;
  letter-spacing: 0.01em;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.help-animation {
  width: 100px;
}

@media only screen and (max-width: 650px) {
  .home-layout {
    height: 400px;
    display: flex;
    justify-content: center;

  }

  .home-primary-text {
    font-size: 1.3rem !important;
    line-height: 2.5rem;
    display: flex;
    justify-content: center;
  }

  .home-secondary-text {
    font-size: 1rem !important;
    font-weight: 100;
    line-height: 1.7rem;
    display: flex;
    justify-content: center;
  }

  .home-button {
    display: flex;
    justify-content: center;
  }

  .mobile-home-animation{
    width: 250px !important;
    height: 200px !important;
  }
}

@media only screen and (max-width: 1140px) {
  .mobile-home-animation{
    width: 350px;
    height: 250px;
  }

  .home-primary-text {
    font-size: 2.1rem;
    line-height: 2.5rem;
  }

  .home-wrapper {
    padding: 0 1.8rem;
    justify-content: center;
  }

  .home-secondary-text {
    font-size: 1.2rem;
    font-weight: 100;
    line-height: 1.7rem;
  }

  .home-layout {
    flex-direction: column;
  }

  .small-home-animation {
    display: block;
  }

  .large-home-animation {
    display: none;
  }
}
</style>
