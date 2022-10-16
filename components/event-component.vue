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
      <h1 class="top-date">Date: {{event.date}}</h1>
      <h1 v-html="event.title" class="top-title"></h1>
      <h2 class="top-venue">{{event.venue}}</h2>
      <hr class="top-line">
      <p v-html="event.intro" class="top-intro"></p>
    </div>

    <div class="event-bottom">
      <h1 class="bottom-title">Event Description</h1>
      <p v-html="event.descriptionfirst" class="bottom-description"></p>
      <p v-html="event.descriptionsecond" class="bottom-description"></p>
      <p v-html="event.descriptionthird" class="bottom-description"></p>
      <h2 class="bottom-venue">Venue: <span style="color:gray">{{event.venue}}</span></h2>
      <h2 class="bottom-time">Time: <span style="color:gray">{{event.time}}</span></h2>
      <div class="event-link">
        <h2 class="bottom-time">Event Link: </h2>
      <a  target="_blank" href="https://www.facebook.com/events/500739775058883/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A927094011324675%7D%7D]%22%7D">
     <span class="fab fa-facebook-f facebook-circle"></span>
      </a>
      </div>
      
    </div>
  </div>  
  </div>
</template>


<style>
.event-link{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 20px;
}
.top-line{
  height:1px;
  opacity: 0.5;
}
.top-venue{
  font-size: 22px;
  font-weight: 400;
  color: rgb(170, 169, 169);
}
.top-intro{
  font-size: 20px;
  color: rgb(203, 221, 238);
}
.top-date{
  font-size: 25px;
  color: red;
  font-weight: 500;
}
.event-top{
  background-color: #182746;
  min-height: 300px;
  width: 100%;
  padding-right: 50px;
  padding-left: 50px;
  padding-top: 20px;
  padding-bottom: 50px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.event-bottom{
  background-color: white;
  min-height: 400px;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.event-item{
  height: auto;
  width: 100%;
  display: flex;
  border-radius:20px;
  flex-direction: column;
  justify-content: space-between;
  
}
.bottom-venue{
  color: #182746;
  font-size: 20px;
  max-width: 1900px;
  font-weight: 500;
}

.bottom-time{
  color: #182746;
  font-size: 20px;
  max-width: 1900px;
  font-weight: 500;
}

.bottom-description{
  color: gray;
  font-size: 20px;
  max-width: 1900px;
  padding-bottom: 20px;
}

.top-title{
  color: white;
  font-size: 45px;
  font-weight: bolder;
  text-transform: uppercase;
}

.bottom-title{
  color: black;
  padding-bottom: 20px;
  font-weight: 500;

}

.nepsap-events{
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  padding: 50px 100px 100px 100px;
}


@media only screen and (max-width: 1141px) {
  .nepsap-events{
    padding: 30px;
  }
.event-top{
  padding-right: 50px;
  padding-left: 50px;
}
.event-bottom{
  padding-right: 50px;
  padding-left: 50px;
}
.event-item{
  
}
.top-title{

  font-size: 33px;
  
}
.top-date{
  font-size: 23px;
}
.top-intro{
  font-size: 18px;
}
}

@media only screen and (max-width: 782px) {
.event-top{
  padding-right: 20px;
  padding-left: 20px;
}
.event-bottom{
  padding-right: 20px;
  padding-left: 20px;
}

  .top-title{
  font-size: 25px;
}
.top-date{
  font-size: 19px;
}
.top-intro{
  font-size: 15px;
}
.bottom-title{
  font-size: 25px;
}
.bottom-description{
  font-size: 15px;
}
.bottom-time{
font-size: 17px;
}
.bottom-venue{
font-size: 17px;
}
}
</style>