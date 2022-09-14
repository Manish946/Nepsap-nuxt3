<script lang="ts">
import Vue from 'vue'
import lottie from 'lottie-web'

export default({
  name: 'aboutContent',
  methods: {},
  components: {
    lottie,
  },
  mounted() {
    lottie.loadAnimation({
      container: <HTMLElement>this.$refs.visionContainer, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets5.lottiefiles.com/packages/lf20_3u3ztlkh.json',
    }),
      lottie.loadAnimation({
        container: <HTMLElement>this.$refs.historyContainer, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets7.lottiefiles.com/packages/lf20_zqndq8mg.json',
      }),
      lottie.loadAnimation({
        container: <HTMLElement>this.$refs.whoWeAreContainer, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets7.lottiefiles.com/packages/lf20_bpqri9y8.json',
      })
  },
})
</script>

<template>
  <div>
    <div class="about-content-wrapper">
      <div class="about-content-img">
        <div ref="whoWeAreContainer" class="about-content-anim"></div>
      </div>

      <div class="about-content-text">
        <h1 class="primary-text">WHO WE ARE</h1>

        <h3 class="secondary-text">
          The Nepalese Scientific-Academic and Professional Panel in Denmark
          (NepSAP) is a group of highly qualified academic skilled Nepalese who
          are either pursuing their MS/PhD or have MS, PhD degrees and working
          in the academic institutes and industries. This purely academic group
          is created to help Nepalese and international researchers/students or
          academicians for idea sharing, research collaborations to broaden
          knowledge and expertise for finding skilled jobs. Currently, we are
          about 50 members who are involved in various sectors of research and
          development and teaching in different Universities and industries in
          Denmark.
        </h3>
      </div>
    </div>

    <div class="about-content-wrapper">
      <div class="about-content-text">
        <h1 class="primary-text">OUR VISION</h1>

        <h3 class="secondary-text">
          Our vision is to help the new-comers both students and professional
          with the relvant information regarding accomodation, guidance to
          understand Danish laws, and procedures to apply the job and others.
        </h3>
      </div>

      <div class="about-content-img">
        <div ref="visionContainer" class="about-content-anim"></div>
      </div>
    </div>

    <div class="about-content-wrapper history">
      <div class="about-content-img">
        <div ref="historyContainer" class="about-content-anim"></div>
      </div>
      <div class="about-content-text">
        <h1 class="primary-text">OUR HISTORY</h1>

        <h3 class="secondary-text">
          The group was formed in January 2018. Since the inception, this group
          is effectively working to promote and uplift the knowledge and
          technology, and idea-sharing programs. Being a purely academic group,
          this group is active via social networks such as Facebook, LinkedIN
          and individual contacts via emails and direct contact via phone among
          its group members.
        </h3>
      </div>
    </div>
  </div>
</template>

<style>
.about-content-anim {
  height: 500px;
  width: 500px;
}

.about-content-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 0 1.8rem;
}

.about-content-img {
  flex: 0 0 50%;
  max-width: 50%;
}

.about-content-text {
  flex: 0 0 50%;
  max-width: 50%;
}

.primary-text {
  display: flex;
  color: gray;
  line-height: 1rem;
  font-size: 1.9rem;
}

.secondary-text {
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 2.7rem;
}

@media only screen and (max-width: 1140px) {
  .about-content-anim {
    height: 300px;
    width: 300px;
  }

  .primary-text {
    display: flex;
    color: gray;
    line-height: 1rem;
    font-size: 1.9rem;
  }

  .secondary-text {
    font-size: 1.1rem;
    font-weight: 200;
    line-height: 2.7rem;
  }
}

@media only screen and (max-width: 650px) {
  .about-content-anim {
    height: 250px;
    width: 250px;
  }

  .primary-text {
    display: flex;
    color: gray;
    line-height: 1rem;
    font-size: 1.9rem;
    justify-content: center;
  }

  .secondary-text {
    display: flex;
    justify-content: center;
    font-size: 1rem;
    font-weight: 200;
    line-height: 2.7rem;
  }

  .about-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 1rem 0 1.8rem;
  }

  .about-content-img {
    flex: 100%;
    max-width: 100%;
  }

  .about-content-text {
    flex: 100%;
    max-width: 100%;
  }

  .history {
    flex-direction: column-reverse !important;
  }

  .about-content {
    padding: 0% !important;
  }
}
</style>
