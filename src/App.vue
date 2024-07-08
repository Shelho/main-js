<template>
  <component :is="layout + '-layout'" />
</template>


<script >
import { useRoute } from "vue-router";
import MainLayout from "./layout/MainLayout.vue";
import { computed } from "vue";
import AuthLayout from "./layout/AuthLayout.vue";

export default {
  setup() {
    const route = useRoute();
    return {
      layout: computed(() => route.meta.layout),
    };
  },
  components: { MainLayout, AuthLayout },
};
</script>


<style >
</style>