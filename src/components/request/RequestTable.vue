<template>
  <h4 v-if="requests && requests.length === 0" class="text-center">
    Заявок пока нет
  </h4>
  <table v-else class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>ФИО</th>
        <th>телефон</th>
        <th>сумма</th>
        <th>статус</th>
        <th>действие</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(r, idx) in requests" :key="r.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ r.fio }}</td>
        <td>{{ r.phone }}</td>
        <td>{{ currency(r.amount) }}</td>
        <td>{{ r.status }}</td>
        <td>
          <router-link v-slot="{ navigate }" custom :to="'/Request?id=r.id'">
            <button class="btn primary" @click="navigate">создать</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { currency } from "../../utils/currensy";
export default {
  props: ["requests"],
  setup() {
    return { currency };
  },
};
</script>

<style>
</style>