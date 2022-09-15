<template>
 <button @click="gmailLogin">Login With Gmail</button>
</template>

<script>
import {GoogleAuthProvider,signInWithPopup,getAuth} from "firebase/auth"


export default {
  methods:{
    gmailLogin(){
      console.log("clocked")
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(),provider)
    }
  }
  }

</script>
