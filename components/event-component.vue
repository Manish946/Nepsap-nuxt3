<script lang="ts">

export default {
  async setup() {
    try{
    const events = ref();
    const result = await getFirestoreData("events");
    const data = JSON.parse(JSON.stringify(result));
    data.result.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));
    if(data.result){
    events.value = data.result;
    console.log(events.value)
    }

    return {
      events,
    };
        }catch(e){
        console.log(e.error)
    }
   
  },
  methods: {
  } 
};
</script>

<template>


  <div class="nepsap-events">
  
  <div class="event-item" v-for="event in events" :key="event.uid">

    <div class="event-text">
     <h1 class="event-title"><span style="color:gray">Title  :</span>  {{event.title}}</h1>
     <h1 class="event-time"> <span style="color:gray">Time :</span>  {{event.time}}</h1>
     <h2 class="event-description" >{{event.description}}</h2>   

    </div>
    <div class="event-image">
        <img v-bind:src="event.image" alt="event-image">
    </div>
  </div>
  </div>  

</template>


<style>
.event-description{
    font-size: 18px;
    text-align: start;
    font-weight: 400;
    flex-wrap: wrap;
}

.event-time{
    font-size: 20px;
    text-align: start;
    font-weight: 400;

}

.event-title{
    font-size: 20px;
    text-align: start;
    font-weight: 400;
}

.event-text{
    background-color: rgba(73, 73, 73, 0.219);
    min-height: 700px;
    max-height: 700px;
    min-width: 700px;
    max-width: 700px;
    height: auto;
    padding: 20px;
}

.event-image img {
    height: auto;
    min-height: 700px;
    max-height: 700px;
    min-width: 500px;
    max-width: 700px;
}

.event-item{
  height: 90vh;   
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
}

.event-events{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  width: 100%;

}

</style>