<template>
    <h1>Members</h1>
    <pre>{{members}}</pre>
    <button @click="handleSubmit">Add To Firebase</button>
</template>

<script setup>
import {addFirestoreData} from "../composables/useFirestore"
const formState = ref({
  Name: "Manish",
  Email: "Shrestha",
  game: "nothing game"

});
  console.log(formState.value.Name)

const handleSubmit = async () => {
  const result = await addFirestoreData("members", formState.value);
  console.log(formState.value.Name)
  await getFirestoreData("members");
};

const members = ref();
onMounted(async()=>{
  const { result } = await $fetch("/api/query?col=members")
  console.log(result)
  members.value = result;
});
</script>
