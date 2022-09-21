<template>
  <h1>Members</h1>
  <client-only>
  <pre>{{ members }}</pre>
  </client-only>
  <button @click="handleSubmit">Add To Firebase</button>
  <button @click="deleteMember">Delete</button>
</template>


<script lang="ts">
import { addFirestoreData } from "../composables/useFirestore";
 const formState = ref<Member>({
    name:"Manish Shrestha",
    timestamp: new Date()
  })

export interface Member{
  name: string,
  timestamp:Date
}

export default {

  async setup(){
  const members = ref<Member>()
  const { result } = await $fetch("/api/query?col=members");
  let data:Member = JSON.parse(JSON.stringify(result))
  
  members.value = data
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
