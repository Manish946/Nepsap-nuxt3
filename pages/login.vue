<template>
  <div>
    <Nav></Nav>
    <main>
      <div class="contact">
      <SignIn></SignIn>
      </div>
    </main>


  </div>
</template>

<script lang="ts">
export default {

}
definePageMeta({
  // middleware: ["loggedin"]
  // or middleware: 'auth'
})
</script>
