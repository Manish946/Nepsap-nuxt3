<template>
   <div class="container">
        <div class="card"  v-for="member in members" :key="member.uid">
            <div class="content">
                <div class="imgBx">
                    <img v-bind:src="member.profile" alt="">
                </div>
                <div class="contentBx">
                    <h4>{{member.fullname}}</h4>

                    <h5 style="color:blue">{{member.role}}</h5>
                    <h5>{{member.description}}</h5>

                </div>
                <div class="sci">
                    <a v-bind:href="member.linkedinLink" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                    <a v-bind:href="'mailto:'+member.email"><i class="fab fa-google" aria-hidden="true" ></i></a>
                </div>
            </div>
        </div>
   </div>
</template>

<script setup>
const members = ref();
onMounted(async () => {
  const { result } = await $fetch("/api/query?col=steeringCommitte")
  console.log(result);
  members.value = result;
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bellota+Text:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');


.container
{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   font-family: 'Bellota Text', cursive;

}
.container .card
{
   width: 360px;
   height: 376px;
   padding: 20px 0px;
   margin: 20px;
   background: #f0f0f3;
   box-shadow: 0.3em 0.3em 0.5em #326fac,
               -0.3em -0.3em 0.5em #517ad3;
   border-radius: 20px;
}
.container .card .content
{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

}
.container .card .content .imgBx
{
   width: 100px;
   height: 100px;
   border-radius: 50%;
   position: relative;
   overflow: hidden;
   margin-bottom: 10px;

}
.container .card .content .imgBx img
{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
}
.container .card .content .contentBx h4
{
   color: #36187d;
   font-size: 1.7rem;
   font-weight: bold;
   text-align: center;
   letter-spacing: 1px;
   padding: 0;
   margin: 0 0 0 0;
}
.container .card .content .contentBx h5
{
   color: #6c758f;
   font-size: 1.2rem;
   font-weight: bold;
   text-align: center;
   margin: 0;
}
.container .card .content .sci
{
   margin-top: 20px;
}
.container .card .content .sci a
{
   text-decoration: none;
   color: #6c758f;
   font-size: 30px;
   margin: 10px;
   transition: color 0.4s;
}
.container .card .content .sci a:hover
{
   color: #0196e3;
}
/*   colors
        #f2f3f7
        #d2dce9
        #36187d
        #6c758f
        #0196e3
 */
</style>