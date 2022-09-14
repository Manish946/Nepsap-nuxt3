<template>
  <div>
    <Nav ></Nav>
    <main>
      <div class="contact">
        <Contact></Contact>
      </div>
    </main>


  </div>
</template>



<script lang="ts">
import Vue from 'vue'
import Contact from '~/components/contact/Contact.vue'
export default({
  components: { Contact },
  name:'ContactPage',
//  middleware:'auth'

})
</script>
