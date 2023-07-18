import Component from "./components/Component.vue";
import ModalComponent from "./components/ModalComponent.vue";
// import QuizComponent from "./components/QuizComponent.vue";
import { createApp } from "vue";
const quizEl = document.querySelector(".jsv-quiz");
const quizModalEl = document.querySelector(".jsv-modal-quiz");

if (quizEl) {
  const app = createApp(Component);
  app.mount(quizEl);
}
if (quizModalEl) {
  const modalApp = createApp(ModalComponent);
  modalApp.mount(quizModalEl);
}
