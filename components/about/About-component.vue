<script lang="ts">
import Vue from 'vue'
import lottie from 'lottie-web'

export default ({
  name: 'aboutCompoent',
  methods: {},
  components: {
    lottie,
  },
  mounted() {
    lottie.loadAnimation({
      container: <HTMLElement>this.$refs.aboutContainer, // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'https://assets8.lottiefiles.com/packages/lf20_fg8zotvy.json',
    })
  },
})
</script>

<template>
  <div class="about-layout">
    <div class="small-about-animation">
      <div class="mobile-about-animation" ref="smallContainer"></div>
    </div>

    <div class="about-wrapper">
      <h1 class="about-primary-text">About Nepsap</h1>
      <h1 class="about-secondary-text">
        This group is created to facilitate the establishment of scientific
        network, to share the scientific knowledge, making possible project and
        research collaborations, to discuss on scientific agendas and problems,
        counseling students for further education, and last but not the least to
        establish a connection among the government bodies, Nepalese community
        and scientific and professional organizations in Nepal and around the
        globe.
      </h1>
    </div>

    <div class="large-about-animation">
      <div class="default-about-animation" ref="aboutContainer"></div>
    </div>
  </div>
</template>


<style>
.default-about-animation {
  width: 500px;
  height: 500px;
}

.small-about-animation {
  display: none;
}

.about-layout {
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0 auto;
}

.about-wrapper {
  max-width: 45.3125rem;
  margin: 0 auto;
  padding: 0 0 0 3.8rem;
}

.about-primary-text {
  font-size: 2.5rem;
  line-height: 3.5rem;
}

.about-secondary-text {
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 2.5rem;
}

.help-animation {
  width: 100px;
}

@media only screen and (max-width: 650px) {
  .about-layout {
    height: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;

  }

  .about-primary-text {
    font-size: 1.3rem !important;
    line-height: 2.5rem;
    display: flex;
    justify-content: center;
  }

  .about-secondary-text {
    font-size: 1rem !important;
    font-weight: 100;
    line-height: 1.7rem;
    display: flex;
    justify-content: center;
  }

  .about-button {
    display: flex;
    justify-content: center;
  }

  .mobile-about-animation {
    width: 250px !important;
    height: 200px !important;
  }

  .default-about-animation {
  width: 200px!important;
  height: 200px!important;
}

}

@media only screen and (max-width: 1140px) {
  .mobile-about-animation {
    width: 350px;
    height: 250px;
  }

  .about-primary-text {
    font-size: 2.1rem;
    line-height: 2.5rem;
    display: flex;
    justify-content: center;
  }

  .about-wrapper {
    padding: 0 1.8rem;
    justify-content: center;
  }

  .about-secondary-text {
    font-size: 1.2rem;
    font-weight: 100;
    line-height: 1.7rem;
  }

.default-about-animation {
  width: 300px;
  height: 300px;
}
}
</style>
