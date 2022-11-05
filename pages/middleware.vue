<template>
  <div>
    <Nav></Nav>
    <main class="event">
        <h1 style="color:red; display: flex; justify-self: center; align-self: center;" >Only Admin is allowed</h1>
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
