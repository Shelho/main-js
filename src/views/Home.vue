<template>
  <app-loader v-if="loading" />
  <app-page title="Список заявок" v-else>
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>

    <request-table :requests="requests"></request-table>
    <teleport to="body">
      <app-model v-if="modal" title="создать заявку" @close="modal = false">
        <request-modal @created="modal = false" />
      </app-model>
    </teleport>
  </app-page>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";
import AppPage from "../components/ui/AppPage.vue";
import RequestTable from "../components/request/RequestTable.vue";
import AppModel from "../components/ui/AppModel.vue";
import RequestModal from "../components/request/RequestModal.vue";
import AppLoader from "../components/ui/AppLoader.vue";

export default {
  setup() {
    const store = useStore();
    const loading = ref(false);
    const modal = ref(false);

    onMounted(async () => {
      loading.value = true;
      await store.dispatch("request/load");
      loading.value = false;
    });

    const requests = computed(() => store.getters["request/requests"]);

    return {
      modal,
      requests,
      loading,
    };
  },

  components: {
    AppPage,
    RequestTable,
    AppModel,
    RequestModal,
    AppLoader,
  },
};
</script>
