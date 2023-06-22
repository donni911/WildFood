(async () => {
  const quizEl = document.querySelector(".jsv-quiz");

  if (!quizEl) {
    return;
  }
  
  const { createApp, defineAsyncComponent } = await import("vue");
  const QuizComponent = defineAsyncComponent(() =>
    import("./components/QuizComponent.vue")
  );
  const app = createApp(QuizComponent);
  app.mount(quizEl);
})();
