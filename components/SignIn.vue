<
<template>
  <div id="firebaseUi-auth-container"></div>
</template>

<script>
export default {
  mounted(){
    const firebaseui = require('firebaseui');
    require("firebaseui/dist/firebaseui.css");
    const ui =
    firebaseui.auth.AuthUI.getInstance() ||
    new firebaseui.auth.AuthUI(this.$fire.auth);

    const config = {
      signInOptions:[
        this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,
        this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl:'/',
      callbacks:{
        signInSuccessWithAuthResult(){
          window.location = '/';
          console.log("Successfully signed in");

        }
      }
      }
      ui.start("#firebaseUi-auth-container",config);
    }
  }

</script>
