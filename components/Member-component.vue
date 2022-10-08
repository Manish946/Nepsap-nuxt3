<script lang="ts">
import { addFirestoreData } from "../composables/useFirestore";
import { IMember } from "../types/IMember";
const formState = ref<IMember>({
  Name: "XQC",
  timestamp: new Date(),
});

export default {
  async setup() {
    try{
    const members = ref<IMember>();
    const result = await getFirestoreData("members");
    const data = JSON.parse(JSON.stringify(result));
    data.result.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));
    if(data.result){
    members.value = data.result;
    console.log(members.value)
    }

    return {
      members,
    };
        }catch(e){
        console.log(e.error)
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

<template>
  <div class="member-header" v-if="members">
    <h1>Members</h1>
    <h3>
      Following is the list of the NepSAP members. We periodically update our
      members list.
    </h3>
  </div>

<v-expansion-panels variant="popout" class="pa-7" v-if="members">
    <v-expansion-panel
      v-for="(member) in members"
      :key="member.uid"
      hide-actions
    >
      <v-expansion-panel-title>
        <v-row
          align="center"
          class="d-flex align-content-space-around flex-wrap"
          no-gutters
        >
          <v-col
            cols="12"
            order="1" 
            md="1"
             sm="12"
             xs="12"
             class="text-center pa-2"
          >
            <v-avatar >
              
              <img v-if="member.profile != 'null'" v-bind:src="member.profile" alt="" height="40" width="40" />
              <img v-if="member.profile == 'null'" height="40" width="40" src="https://firebasestorage.googleapis.com/v0/b/nepsap-website.appspot.com/o/Members%2Fdefault.png?alt=media&token=6ae99e14-2486-4a05-8de5-71847f1de7ab">
            </v-avatar>
          </v-col>

          <v-col
            class="hidden-xs-only text-wrap text-center font-weight-light"
            cols="12"
             md="3"
             sm="12"
             xs="12"
            order="2"
          >
            <strong v-html="member.Name" class="member-primary"></strong>
          </v-col>

          <v-col
            class="text-wrap text-left text-center pa-2"
            cols="12"
             md="7"
             sm="12"
             xs="12"
             order="3"

          >
            <!-- <v-chip
              v-if="message.new"
              :color="`${message.color}-lighten-1`"
              class="ml-0 mr-2"
              label
              small
            >
              {{ message.new }} new
            </v-chip> -->
            <strong v-html="member.Expertise"></strong>
          </v-col>

          <v-col
            v-if="member.Email"
            cols="12"
             md="1"
             sm="12"
             xs="12"
            order="4"
            class="text-medium-emphasis text-truncate hidden-sm-and-down d-flex justify-center pa-2"
          >
           <a v-bind:href="member.Linkedin" target="_blank"
              ><i class="fab fa-linkedin member-links" aria-hidden="true"></i
            ></a>
            &nbsp;
            <a v-bind:href="'mailto:'+member.Email" target="_blank"
              ><i class="fas fa-envelope member-links" aria-hidden="true"></i
            ></a>
          </v-col>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-card-text v-text="'Degree : '+member.Degree"></v-card-text>
        <v-card-text v-text="'University : '+member.University"></v-card-text>
        <v-card-text v-text="'Position : '+member.Position"></v-card-text>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
  
</template>


<style>
.member-primary{
  color: #121d33;
}


.member-links{
  font-size: 25px;
  color: #0f24dd;
}

.member-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 35px;
  margin-left: 42px;
  margin-right: 42px;
  text-align: center;
}

.members-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
</style>