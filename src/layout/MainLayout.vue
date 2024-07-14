<template>
  <the-navbar></the-navbar>
  <the-sidebar />
  <div class="container with-nav">
    <app-message />
    <router-view />
  </div>
</template>

<script>
import TheSidebar from "../components/TheSidebar.vue";
import TheNavbar from "../components/TheNavbar.vue";
import appMessage from "../components/ui/appMessage.vue";

export default {
  components: { TheNavbar, appMessage, TheSidebar },
};
</script>

<style>
</style>