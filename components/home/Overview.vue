<script lang="ts">
import Vue from 'vue'
import lottie from 'lottie-web'

export default({
  name: 'OverviewCompoent',
  methods: {},
  components: {
    lottie,
  },
})
</script>

<template>
  <div class="overview">
    <div class="overview-wrapper">
      <div class="overview-item">
        <div class="item-header">
            <div>
            <img height="50" width="50" src="~/public/assets/cpr.svg" alt="" />
            
            </div>
          <span class="item-text">CPR</span>
        </div>
        <div class="item-content">
          <div class="flex-row-space">
            <p class="content-text">Register CPR :</p>
            <a
              href="https://ihcph.kk.dk/cpr-registration-0"
              class="link"
              target="_blank"
              >Register</a
            >
          </div>
        </div>
      </div>
      <div class="overview-item">
        <div class="item-header">
          <img height="50" width="50" src="~/public/assets/studentHouse.svg" alt="" />
         
          <span class="item-text">Student</span>
        </div>
        <div class="item-content">
          <div class="flex-row-space">
            <p class="content-text">Sign up :</p>
            <a
              href="https://www.kollegierneskontor.dk/default.aspx?lang=GB"
              class="link"
              target="_blank"
              >Signup</a
            >
          </div>
        </div>
      </div>
      <div class="overview-item">
        <div class="item-header">

          <img height="50" width="50" src="~/public/assets/rentalHouse.svg" alt="" />
          
          <span class="item-text">Rental</span>
        </div>
        <div class="item-content">
          <div class="flex-row-space">
            <p class="content-text">For Free Legal :</p>
            <a
              href="https://www.retshjaelpen.dk/front-page"
              class="link"
              target="_blank"
              >Link</a
            >
          </div>
        </div>
      </div>
      <div class="overview-item">
        <div class="item-header">
          <img height="50" width="50" src="~/public/assets/skat.svg" alt="" />
          
          <span class="item-text">TAX</span>
        </div>
        <div class="item-content">
          <div class="flex-row-space">
            <p class="content-text">Skat Website :</p>
            <a href="https://skat.dk/" class="link" target="_blank"
              >Skat Link</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.circle-load {
  height: 50px;
  width: 50px;
  background-color: #b6b1b1;
  border-radius: 50%;
}

.item-content {
  margin: 0%;
  padding: 0%;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  border: 1px solid #2266e5;
  color: #2266e5;
  cursor: pointer;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  font-size: 1.2rem;
  transition: background-color 0.3s ease 0s;
}

.link:hover {
  background-color: #2266e5;
  color: white;
}

.content-text {
  font-size: 20px;
  font-weight: 500;
  color: black;
  margin: 0%;
  padding: 0%;
}

.item-text {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  border: medium none;
  color: #2266e5;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  font-size: 1.2rem;
  transition: background-color 0.3s ease 0s;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
  max-height: 50px;
  margin-bottom: 0.5rem;
}

.overview {
  z-index: 100;
  display: flex;
}

.overview-wrapper {
  margin: -70px auto;
  display: flex;
  gap: 40px;
  padding: 0 0 0 1.8rem;
}

.overview-item {
  background-color: #ffff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(103 113 133) 0.3rem 0.5rem 2rem 0;
  color: black;
  min-width: 225px;
  min-height: 100px;
}

.overview-item:hover {
  background-color: #e9e9e9;
}

@media only screen and (max-width: 1220px) {
  .overview-wrapper {
    overflow-x: scroll;
    margin: -50px auto;
    padding: 0 16px 56px;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }

  .overview-wrapper::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
}

@media only screen and (max-height: 814px) {
  .overview-wrapper {
    margin: -10px auto;
  }
}
</style>
