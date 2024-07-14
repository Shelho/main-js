<template>
  <app-loader v-if="loading"></app-loader>
  <app-page back title="заявка" v-else-if="request">
    <p><strong>Имя пользователя</strong>:{{ request.fio }}</p>
    <p><strong>телефон</strong>:{{ request.phone }}</p>
    <p><strong>сумма</strong>:{{ currency(request.amount) }}</p>
    <p><strong>статус</strong>: <app-status :type="request.status" /></p>

    <div class="form-control">
      <label for="status">статус</label>
      <select id="status" v-model="status">
        <option value="done">завершен</option>
        <option value="cancelled">отменен</option>
        <option value="active">Активен</option>
        <option value="pending">выполняется</option>
      </select>
    </div>
    <button class="btn danger" @click="remove">удалить</button>
    <button class="btn" @click="update" v-if="hasChange">обновить</button>
  </app-page>
  <h3 v-else class="text-center text-white">
    заявки с ID = {{ $route.params.id }} нет.
  </h3>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import AppLoader from "../components/ui/AppLoader.vue";
import AppPage from "../components/ui/AppPage.vue";
import AppStatus from "../components/ui/AppStatus.vue";
import { currency } from "../utils/currensy.js";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const loading = ref(true);
    const request = ref({});
    const status = ref();
    const remove = async () => {
      await store.dispatch("request/remove", route.params.id);
      router.push("/");
    };
    const update = async () => {
      const data = {
        ...request.value,
        status: status.value,
        id: route.params.id,
      };
      await store.dispatch("request/update", data);
      request.value.status = status.value;
    };
    const hasChange = computed(() => request.value.status !== status.value);
    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch("request/loadOne", route.params.id);
      loading.value = false;
      status.value = request.value?.status;
    });
    return { loading, request, currency, remove, update, status, hasChange };
  },

  components: { AppPage, AppLoader, AppStatus },
};
</script>

<style>
</style>