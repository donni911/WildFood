import Component from "./components/Component.vue";
// import QuizComponent from "./components/QuizComponent.vue";
import { createApp } from "vue";
const quizEl = document.querySelector(".jsv-quiz");

if (quizEl) {
  const app = createApp(Component);
  app.mount(quizEl);
}
