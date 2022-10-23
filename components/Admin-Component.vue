<template>
  <div id="admin-panel">
    <div id="side-menu">
        <Admin-sidemenu></Admin-sidemenu>
    </div>

    <div id="main-content"></div>
  </div>
</template>

<script lang="ts">
import AdminSidemenu from './admin/Admin-sidemenu.vue'

export default {
  components: { AdminSidemenu },

}
</script>

<style>
#admin-panel {
  display: flex;
  background-color: var(--primary-color);
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
}

#main-content {
  background-color: white;

  height: 100vh;
  flex: 1;
}

#side-menu {
  background-color: var(--primary-color);
  height: 100vh;
  max-width: 250px;
  min-width: 250px;


}
</style>
