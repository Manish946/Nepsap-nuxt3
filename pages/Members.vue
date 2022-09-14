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
export default({
  name:'MembersPage',
  computed:{


  },
   mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
})
</script>


