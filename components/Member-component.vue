<template>
<div class="member-header" v-if="members">
      <h1>Members</h1>
      <h3>Following is the list of the NepSAP members. We periodically update our members list.</h3>
    </div>

    <v-card
    class="mx-auto"
  >
<v-list density="compact">
      <v-list-subheader >NEPSAP MEMBERS</v-list-subheader>
   <v-list-item
        v-for="(item, i) in members"
        :key="i"
        :value="item"
        active-color="primary"
        variant="tonal"
        
      >
          <v-list-item-avatar size="40">
            <v-avatar>
            <v-img v-if="item.profile" v-bind:src=item.profile></v-img>
            <v-img v-if="!item.profile" src="https://firebasestorage.googleapis.com/v0/b/nepsap-website.appspot.com/o/Members%2Fdefault.png?alt=media&token=6ae99e14-2486-4a05-8de5-71847f1de7ab"></v-img>

            </v-avatar>
          </v-list-item-avatar>

        <v-list-item-title v-text="item.Name" ></v-list-item-title>
        
   </v-list-item>

</v-list>
  </v-card>
  <div class="members-wrapper">
    <div v-for="member in members" :key="member.uid" >
    <h1>Name : {{member.Name}}</h1>
    <h2>TimeStamp : {{member.timestamp}}</h2>
    </div>

  </div>
  <!-- <button @click="handleSubmit">Add To Firebase</button>
  <button @click="deleteMember">Delete</button> -->
</template>


<script lang="ts">
import { addFirestoreData } from "../composables/useFirestore";
import {IMember} from "../types/IMember"
 const formState = ref<IMember>({
    Name:"XQC",
    timestamp: new Date()
  })

export default {

  async setup(){
  const members = ref<IMember>()
  const result = await getFirestoreData("members");
  const data = JSON.parse(JSON.stringify(result))
  data.result.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1)
  members.value = data.result
    return{
     members
    }
  },
  methods: {
    async handleSubmit() {
      const { result } = await addFirestoreData("members", formState.value);
      await getFirestoreData("members");
    },
    async deleteMember() {
      await deleteFirestoreData("members", "XOa2vfh7bx7ZVzc828bI");
      await getFirestoreData("members");
    },
  },
};


</script>

<style>
.member-header{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 35px;
}

.members-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
</style>