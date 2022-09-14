<template>
  <div>
    <Nav ></Nav>
    <main>
      <div class="contact">
        <Contact-component></Contact-component>
      </div>
    </main>


  </div>
</template>



<script lang="ts">
import Vue from 'vue'
import Contact from '~~/components/contact/Contact-component.vue'
export default({
  components: { Contact },
  name:'ContactPage',
//  middleware:'auth'

})
</script>
