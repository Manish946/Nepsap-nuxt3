<script lang="ts">
import Vue from 'vue'

export default ({
  name: 'HomeCompoent',
  methods: {},
  components: {},
  mounted() {},
})
</script>

<template>
  <div>
    <div class="footer-join">
      <h1>Become a Nepsap member</h1>
      <nuxt-link class="join-button" to="/members">Get Started</nuxt-link>
    </div>

    <div class="footer">
      <div>
        <h1 class="footer-header">Nepsap</h1>

        <p>Copyright © 2022 Designed And Developed By Manish Shrestha</p>
      </div>
      <div>
        <h1 class="footer-header">Social</h1>
        <ul class="social-links">
          <li class="footer-links">
            <a
              href="https://www.facebook.com/NepSAPDenmark"
              target="_blank"
              class="social-link"
            >
              <p class="fa fa-facebook facebook-circle"></p>
              <p class="link-text">Facebook</p>
            </a>
          </li>
          <li class="footer-links">
            <a
              href="https://www.linkedin.com/groups/8681164/"
              target="_blank"
              class="social-link"
            >
              <p class="fa fa-linkedin linkedin-circle"></p>
              <p class="link-text">Linkedin</p>
            </a>
          </li>
          <li class="footer-links">
            <a
              href="mailto: nepsap.denmark@gmail.com"
              target="_blank"
              class="social-link"
            >
              <p class="fa fa-google google-circle "></p>
              <p class="link-text">Gmail</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style>
.footer-links{
  margin-bottom: 20px;
}

.footer-header {
  font-size: 34px;
  color: rgb(18 29 51);
  letter-spacing: 2px;
}

.social-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.link-text {
  font-size: 20px;
  color: #144699;
}

.social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  opacity: 1;
}

.social-link:hover {
  opacity: 0.9;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 3rem auto;
  max-width: 65rem;
  padding: 0 2.4rem;
}

.footer-join {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  background-color: rgb(18 29 51);
  color: white;
  padding: 2rem;
}

.join-button {
  padding: 0.75rem 1.375rem;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 144%;
  border-radius: 0.5rem;
  border: 0.125rem solid transparent;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  white-space: nowrap;
  color: #0c6cf2;
  background: #fff none repeat scroll 0% 0%;
}
</style>
