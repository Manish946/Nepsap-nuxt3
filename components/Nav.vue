<script>

export default({
  name: 'NavComponent',
  computed: {
    currentUser() {
      return this.$store.state.userData
    },
  },
  data() {
    return {
      open: false,
      windowWidth: 0,
      showNavbar: true,
      lastScrollPosition: 0,
    }
  },
  methods: {
    signOut() {
      this.$fire.auth.signOut()
      window.location.href = '/login'
    },
    menuTrigger() {
      const nav = document.getElementById('nav')
      if (nav.style.display == 'block') {
        nav.style.display = 'none'
        this.open = false
      } else {
        nav.style.display = 'block'
        this.open = true
      }
    },
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop

      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
})
</script>
<template>
  <div
    class="navigation-wrapper"
    :class="{ 'navigation-wrapper-hidden': !showNavbar }"
  >
    <div class="navigation-container">
      <nuxt-link to="/" class="logo">
        <img height="30" width="224" src="~/assets/Nepsaplogo.svg" alt="" />
      </nuxt-link>

      <div class="nav-div">
        <nav id="nav" class="nav">
          <ul class="nav-wrapper">
            <li class="nav-link">
              <a href="#">Information</a>
            </li>
            <li class="nav-link">
              <nuxt-link to="/events">Events</nuxt-link>
            </li>
            <li class="nav-link">
              <nuxt-link to="/steeringCommitte">Steering Committe</nuxt-link>
            </li>
            <li class="nav-link">
              <nuxt-link to="/members">Members</nuxt-link>
            </li>
            <li class="nav-link">
              <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
            <li class="nav-link">
              <nuxt-link to="/about">About Us</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <!-- <div >
      </div> -->
      <div class="login-wrapper">
        <client-only>
          <nuxt-link to="/login" v-if="!currentUser" class="login-button"
            >Login</nuxt-link
          >
          <a v-if="!currentUser" class="signin-button" href="#">Sign Up</a>
          <a @click="signOut" v-if="currentUser" class="login-button">Logout</a>

          <span style="color: white; font-size: 18px" v-if="currentUser">{{
            currentUser.displayName
          }}</span>
          <template #placeholder>
            <button class="loading-button">Loading</button>
            <button class="loading-button">Loading</button>
          </template>
        </client-only>
      </div>

      <div>
        <button
          id="menu-trigger"
          color="#FFFFFF"
          aria-expanded="false"
          class="button-mobilemenu"
          aria-label="Mobile Menu"
          @click="menuTrigger"
        >
          <svg
            v-if="open == false"
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M20 18h-6M20 6H10M20 12H4"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <svg
            v-if="open"
            width="32"
            height="32"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M24 8 8 24M8 8l16 16"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.loading-button {
  margin-right: 1.25rem;
  background-color: #ccd2de;
  color: #ccd2de;
  border: 1px solid #ccd2de;
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

.navigation-wrapper-hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
  transition: 0.5s;
}

.button-mobilemenu {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: none;
}

.login-wrapper {
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
}

.nav-wrapper {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
}

.logo {
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-start;
}

.nav-link {
  margin-right: 1.25rem;
  transition: color 500ms ease 0s, background-color 500ms ease 0s;
  cursor: pointer;
  width: 100%;
}

.nav-link a {
  text-decoration: none;
  color: rgb(204 210 222);
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  position: relative;
  width: 100%;
  white-space: nowrap;
}

.nav-link a:hover {
  color: rgb(255 255 255);
  background-color: rgb(240 242 247 / 10%);
}

.navigation-wrapper {
  background-color: rgb(18 29 51);
  border-bottom: 1px solid rgb(255 255 255 / 20%);
  z-index: 2;
  position: fixed;
  width: 100%;
  display: flex;
  height: 10vh;
}

.navigation-container {
  box-sizing: content-box;
  display: flex;
  margin: auto;
  width: 100%;
  height: 4.75rem;
  padding: 0 1rem;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  max-width: 80rem;
  font-size: 16px;
  font-weight: 500;
}

.login-button {
  margin-right: 1.25rem;
  background-color: transparent;
  color: white;
  border: 1px solid white;
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

.signin-button {
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

@media only screen and (min-width: 1140px) {
  .nav {
    display: block !important;
  }
}

@media only screen and (max-width: 1141px) {
  .button-mobilemenu {
    display: block;
  }

  .nav-div {
    z-index: 200;
  }

  .nav {
    position: fixed;
    gap: 0;
    background-color: rgb(247 248 250);
    width: 100vw;
    height: 100vh;
    transition: 0.3s;
    left: 0%;
    right: 0%;
    top: 8%;
    display: none;
  }

  .nav-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 200;
    padding: 0;
    margin: 0;
  }

  .nav-link {
    margin-right: 0;
    padding: auto;
    border-top: 1px solid rgb(240 242 247);
    border-bottom: 1px solid rgb(240 242 247);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255 255 255);
  }

  .nav-link a {
    color: black;
    font-weight: 600;
    padding: 22px;
  }

  .nav-link a:hover {
    background-color: rgb(239 236 254 / 25%);
    color: black;
  }
}

@media only screen and (max-width: 500px) {
  .login-wrapper {
    display: none;
  }
}
</style>
