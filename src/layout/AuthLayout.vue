<template>
  <div class="container">
    <div>
      <app-message />
      <router-view />
    </div>
  </div>
</template>

<script>
import appMessage from "../components/ui/appMessage.vue";
export default {
  components: { appMessage },
};
</script>

<style>
</style>