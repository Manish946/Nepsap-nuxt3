<template>
  <button @click="gmailLogin">Login With Gmail</button>
  <button @click="logout">Logout</button>
  <pre>{{firebaseUser}}</pre>
</template>

<script>
import {signOutUser} from "../composables/useFirebase"


export default {
  computed:{

  },
  methods: {
    gmailLogin(){

    gmailSignin();
},
  logout(){
    signOutUser()
  }
  },

};
</script>
