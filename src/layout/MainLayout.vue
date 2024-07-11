<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <app-message />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import appMessage from "../components/ui/appMessage.vue";

export default {
  components: { TheNavbar, appMessage },
};
</script>

<style>
</style>