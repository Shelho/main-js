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
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["requests"],
};
</script>

<style>
</style>