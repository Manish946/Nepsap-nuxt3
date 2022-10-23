<template>
  <div id="side-menu">
    <div id="admin-logo">
      <nuxt-link to="/admin" class="logo">
        <img height="40" width="224" src="/assets/NepsapLogo.svg" alt="" />
      </nuxt-link>
    </div>
    <hr color="white" />
    <div>
      <v-list density="compact" nav pa-2>
        <v-list-item
          v-bind:prepend-icon="menu.icon"
          solo
          v-bind:title="menu.title"
          v-bind:value="menu.title"
          v-for="menu in menuLinks"
          :key="menu.icon"
        >
      
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      menuLinks: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          route: "dashboard",
        },
        {
          title: "Members",
          icon: "mdi-account",
          route: "member",
        },
      ],
    };
  },
};
</script>

<style >
#side-menu {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
}
#admin-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 15px;
  width: 100%;
}
</style>