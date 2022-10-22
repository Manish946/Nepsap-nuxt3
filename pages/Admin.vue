<template>
 <h1>admin Page</h1>
 <h1 v-if="user">{{user.displayName}}</h1>
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

.about-content{
  padding: 75px 0;
}

</style>
