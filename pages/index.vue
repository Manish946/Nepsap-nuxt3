<template>
  <div>

    <Nav></Nav>
    <main>
      <div class="home">
        <Home></Home>
      </div>
      <div>
        <Overview></Overview>
      </div>
      <div>
        <Newcomers></Newcomers>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </main>


  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Overview from '~/components/home/Overview.vue'
export default({
  components: {Overview },
  name: 'IndexPage',
})
</script>
