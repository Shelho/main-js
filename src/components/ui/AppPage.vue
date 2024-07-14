<template>
  <div class="breadcrumbs" v-if="back">
    <router-link to="/"> вернуться к списку</router-link>
  </div>
  <div class="card">
    <h2 class="card-title">
      {{ title }}
      <slot name="header" />
    </h2>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    back: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    document.title = `${props.title} | Клон Банка`;
  },
};
</script>

<style>
</style>