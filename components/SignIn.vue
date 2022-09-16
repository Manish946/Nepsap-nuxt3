<template>
<div>
  <button @click="gmailLogin">Login With Gmail</button>
  <button @click="logout" v-if="user">Logout</button>
  <client-only v-if="user">
  <pre>{{user.displayName}}</pre>

  </client-only>
</div>

</template>

<script setup>

const user = useFirebaseUser();

function gmailLogin(){

    gmailSignin();
}

function logout(){
    signOutUser()
  }

</script>
