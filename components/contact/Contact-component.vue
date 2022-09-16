<script lang="ts">
import Vue from 'vue'
import lottie from 'lottie-web'

export default({
  name: 'contactCompoent',
  methods: {},
  components: {
    lottie,
  },
  mounted() {
    lottie.loadAnimation({
      container: <HTMLElement>this.$refs.contactContainer, // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'https://assets2.lottiefiles.com/private_files/lf30_tvxeldei.json',
    })
  },
})
</script>
<template>
  <div class="contact-layout">
    <div class="small-contact-animation">
      <div class="mobile-contact-animation" ref="smallContainer"></div>
    </div>

    <div class="contact-wrapper">
      <h1 class="contact-primary-text">Contact Nepsap</h1>
      <ul class="social-wrapper-links">
        <li class="social-item">
          <a
            class="fa fa-facebook"
            href="https://www.facebook.com/NepSAPDenmark"
            aria-label="link"
            target="_blank"
          ></a>
        </li>

        <li class="social-item">
          <a
            class="fa fa-google"
            href="mailto: nepsap.denmark@gmail.com"
            aria-label="link"
            target="_blank"
          ></a>
        </li>
        <li class="social-item">
          <a
            class="fa fa-linkedin"
            href="https://www.linkedin.com/groups/8681164/"
            aria-label="link"
            target="_blank"
          ></a>
        </li>
      </ul>
      <div>
        <form
          action="https://formsubmit.co/c73ab5bd584801f346b6a0f91e16ca92"
          method="POST"
        >
          <input
            class="feedback-input"
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            class="feedback-input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input type="hidden" name="_subject" value="New submission!" />
          <input type="hidden" name="_template" value="table" />
          <textarea
            class="feedback-input"
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <input
            type="hidden"
            name="_next"
            value="https://nepsap.netlify.app/contact"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>

    <div class="large-contact-animation">
      <div class="default-contact-animation" ref="contactContainer"></div>
    </div>
  </div>
</template>


<style>
.fa {
  padding: 10px;
  font-size: 20px;
  width: 20px;
  text-align: center;
  text-decoration: none;

  border-radius: 50%;
}

.fa-google {
  background: #dd4b39;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fa-facebook {
  background: #3b5998;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-wrapper-links {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 30px;
  margin: 0;
}

.social-item {
  text-decoration: none;
}


form {
  max-width: 420px;
  margin: 50px auto;
}

.feedback-input {
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border: 2px solid #5aadec;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
}

.feedback-input:focus {
  border: 2px solid #cc4949;
}

textarea {
  height: 150px;
  line-height: 150%;
  resize: vertical;
}

[type='submit'] {
  width: 100%;
  background: #5aadec;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: white;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 700;
}

[type='submit']:hover {
  background: #cc4949;
}

.default-contact-animation {
  width: 500px;
  height: 500px;
}

.small-contact-animation {
  display: none;
}

.contact-layout {
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0 auto;
}

.contact-wrapper {
  max-width: 45.3125rem;
  margin: 0 auto;
  padding: 0 0 0 3.8rem;
}

.contact-primary-text {
  font-size: 2.5rem;
  margin: 10px auto;
}

.contact-secondary-text {
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 2.5rem;
}

.help-animation {
  width: 100px;
}

@media only screen and (max-width: 650px) {
  .contact-layout {
    height: 400px;
    display: flex;
    justify-content: center;
  }

  .contact-primary-text {
    font-size: 1.9rem !important;
    line-height: 2.5rem;
    display: flex;
    justify-content: center;
  }

  .contact-secondary-text {
    font-size: 1rem !important;
    font-weight: 100;
    line-height: 1.7rem;
    display: flex;
    justify-content: center;
  }

  .contact-button {
    display: flex;
    justify-content: center;
  }

  .mobile-contact-animation {
    width: 250px !important;
    height: 200px !important;
  }

  .default-contact-animation {
    width: 200px !important;
    height: 150px !important;
  }
}

@media only screen and (max-width: 1140px) {
  .mobile-contact-animation {
    width: 350px;
    height: 250px;
  }

  .contact-primary-text {
    font-size: 2.1rem;
    line-height: 2.5rem;
    display: flex;
    justify-content: center;
  }

  .contact-wrapper {
    padding: 0 1.8rem;
    justify-content: center;
  }

  .social-wrapper {
    justify-content: center;
  }

  .contact-secondary-text {
    font-size: 1.2rem;
    font-weight: 100;
    line-height: 1.7rem;
  }

  .contact-layout {
    flex-direction: column;
  }

  .default-contact-animation {
    width: 300px;
    height: 200px;
  }
}
</style>
