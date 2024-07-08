<template>
  <nav class="navbar">
    <h3>online bank</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">заявки</router-link>
      </li>
      <li>
        <router-link to="/">помошь</router-link>
      </li>
      <li>
        <a href="#">сообщения</a>
      </li>
      <li>
        <a href="#" @click.prevent="logout">выход</a>
      </li>
    </ul>
  </nav>
</template>

<script >
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    return {
      logout: () => {
        store.commit("auth/logout");
        router.push("/auth");
      },
    };
  },
};
</script>

<style>
</style>