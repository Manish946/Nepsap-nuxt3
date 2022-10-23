<template>
 
 <main id="adminPage">
 <Admin-Component></Admin-Component>
 </main>

</template>



<script>
export default{
    data() {
    return {
      user: useFirebaseUser()
    }
  }

}

definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})

</script>

<style>

#adminPage{
  background-color: var(--primary-color);
  height: 100vh;
}



:root{
  --primary-color: #121d33;
}
</style>
