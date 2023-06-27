import QuizComponent from "./components/QuizComponent.vue";
import { createApp } from "vue";
const quizEl = document.querySelector(".jsv-quiz");

if (quizEl) {
  // const QuizComponent = defineComponent({
  //   components: {
  //     QuizComponent: () => import("./components/QuizComponent.vue"),
  //   },
  //   template: "<QuizComponent />",
  // });

  const app = createApp(QuizComponent);
  app.mount(quizEl);
}
