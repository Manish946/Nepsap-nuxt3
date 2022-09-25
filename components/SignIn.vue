<template>
<div class="signin-wrapper">
  <p class="signin-header">NEPSAP</p>

  <v-btn
       @click="gmailLogin"
        color="red"
         prepend
      >Sign In</v-btn>
      
    <p class="signin-subheader">Sign In with Google</p>
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

<style>
.signin-header{
  color: rgb(31, 35, 49);
  font-weight: bold;
  font-size: 35px;
  margin: 0%;
}

.signin-subheader{
  color: rgb(190, 22, 22);
  font-size: 25px;
}

.signin-wrapper{
  height: 500px;
  width: 350px;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content:space-around;
  align-items: center;
  border-radius: 5px;
  flex-direction: column;

}

.gmail-button{
  border-color: transparent;
  border-radius: 5px;
  font-size: 20px;
  padding: 15px;

}
.gmail-button:hover{
  background-color: red;
  color: white;
}
</style>
