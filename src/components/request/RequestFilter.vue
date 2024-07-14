<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="начнте писать имя" v-model="name" />
    </div>
    <div class="form-control">
      <select v-model="status">
        <option disabled selected>выберите статус</option>
        <option value="done">завершен</option>
        <option value="cancelled">отменен</option>
        <option value="active">Активен</option>
        <option value="pending">выполняется</option>
      </select>
    </div>
    <div class="btn warning" @click="reset" v-if="isActive">очистить</div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
export default {
  emits: ["update:modelValue"],
  props: ["modelValue"],
  setup(_, { emit }) {
    const name = ref();
    const status = ref();

    watch([name, status], (values) => {
      emit("update:modelValue", {
        name: values[0],
        status: values[1],
      });
    });
    const isActive = computed(() => name.value || status.value);
    return {
      name,
      status,
      isActive,
      reset: () => {
        (status.value = ""), (name.value = null);
      },
    };
  },
};
</script>

<style>
</style>