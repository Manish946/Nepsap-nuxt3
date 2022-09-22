<template>
  <div class="members-wrapper">
    <div v-for="member in members" :key="member.uid" >
    <h1>Name : {{member.Name}}</h1>
    <h2>TimeStamp : {{member.timestamp}}</h2>
    </div>

  </div>
  <button @click="handleSubmit">Add To Firebase</button>
  <button @click="deleteMember">Delete</button>
</template>


<script lang="ts">
import { addFirestoreData } from "../composables/useFirestore";
import {IMember} from "../types/IMember"
 const formState = ref<IMember>({
    Name:"Manish Shrestha",
    timestamp: new Date()
  })

export default {

  async setup(){
  const members = ref<IMember>()
  const { result } = await $fetch("/api/query?col=members");
  var data = JSON.parse(JSON.stringify(result))
  members.value = result
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
.members-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
</style>