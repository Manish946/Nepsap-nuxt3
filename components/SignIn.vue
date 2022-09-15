<template>
 <button @click="gmailLogin">Login With Gmail</button>
</template>

<script>
import {GoogleAuthProvider,signInWithPopup,getAuth} from "firebase/auth"


export default {
  methods:{
    gmailLogin(){
      console.log("clicked")
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(),provider)
    .then((result)=>{
      console.log(result)
    })
    .catch((error)=>{
      console.log(error)
    })
    }
  }
  }

</script>
