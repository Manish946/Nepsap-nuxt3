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
    <div class="event-top">
      <h1 v-html="event.title" class="top-title"></h1>
      <h1 v-html="event.time"></h1>
    </div>

    <div class="event-bottom">
      <h1 class="bottom-title">Event Description</h1>
      <p v-html="event.description" class="bottom-description"></p>
      <h2 class="bottom-venue">Venue: {{event.venue}}</h2>
    </div>
  </div>  
  </div>
</template>


<style>
.event-top{
  background-color: #182746;
  min-height: 400px;
  width: 100%;
   padding-right: 100px;
  padding-left: 100px;
  padding-top: 50px;
}
.event-bottom{
  background-color: white;
  min-height: 400px;
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
}
.event-item{
  background-color: white;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bottom-venue{
  color: rgb(38, 41, 73);
  font-size: 20px;
  max-width: 1900px;
}
.bottom-description{
  color: gray;
  font-size: 20px;
  max-width: 1900px;
}

.top-title{
  color: white;
  font-size: 45px;
  font-weight: bolder;
  text-transform: uppercase;
}

.bottom-title{
  color: black;
}

.nepsap-events{
  width: 100%;
  display: flex;
  flex-direction: column;
  /* row-gap: 20px; */
}
</style>