<template>
  <div>
    <Nav></Nav>
    <main>
      <div class="members">

      </div>
    </main>


  </div>
</template>



<script lang="ts">
import Vue from 'vue'
export default({
  name:'MembersPage',
  computed:{

    currentUser(){
      return this.$store.state.userData;
    },

  },
   mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
})
</script>


