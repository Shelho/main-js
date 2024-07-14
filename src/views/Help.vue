<template>
  <app-page back title="помощь">
    <question-item
      v-for="q in questions"
      :key="q.title"
      :question="q"
    ></question-item>
  </app-page>
</template>
<script>
import AppPage from "../components/ui/AppPage.vue";
import QuestionItem from "../components/question/QuestionItem.vue";
export default {
  setup() {
    const questions = [
      {
        title: "что есть в даной системе?",
        text: "тут есть всё, что-бы смотреть, какие заявки человек добавлял",
      },
      {
        title: "как тут работает авторизация",
        text: "все реализовано через Firebase",
      },
    ];
    return { questions };
  },
  components: { AppPage, QuestionItem },
};
</script>
