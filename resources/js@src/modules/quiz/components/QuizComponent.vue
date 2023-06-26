<template>
    <div class="c-quiz">
        <div
            class="min-h-[320px] md:min-h-[475px] w-full flex flex-col bg-white p-4 md:p-[32px]"
        >
            <QuizHeader
                :questions="questions"
                :activeQuestion="activeQuestion"
                @previousQuestion="activeQuestion--"
                @nextQuestion="nextQuestion()"
            />
            <transition mode="out-in">
                <div
                    :key="questions[activeQuestion].id"
                    class="flex flex-grow pt-2 md:pt-[32px]"
                >
                    <div
                        class="flex w-full flex-col justify-between"
                        v-if="!quizFinished"
                    >
                        <h3
                            :key="questions[activeQuestion].question"
                            class="font-semibold md:text-9 mb-4"
                            :class="{
                                'md:mb-4': questions[activeQuestion]?.subtitle,
                                'md:mb-12':
                                    !questions[activeQuestion]?.subtitle,
                            }"
                        >
                            {{ questions[activeQuestion].question }}
                        </h3>
                        <p
                            v-if="questions[activeQuestion].subtitle"
                            :key="questions[activeQuestion].subtitle"
                            class="color-primary opacity-30 font-medium mb-4"
                        >
                            {{ questions[activeQuestion]?.subtitle }}
                        </p>

                        <QuestionsController
                            :question="questions[activeQuestion]"
                        />
                    </div>

                    <QuizResults :results="questions" v-else />
                </div>
            </transition>
        </div>
    </div>
</template>
  
<script>
import questions from "../questions.js";
import QuestionsController from "./question-types/QuestionsController.vue";
import QuizHeader from "./QuizHeader.vue";
import QuizResults from "./QuizResults.vue";

export default {
    data() {
        return {
            activeQuestion: 5,
            questions,
            quizFinished: false,
        };
    },

    components: {
        QuestionsController,
        QuizHeader,
        QuizResults,
    },

    methods: {
        nextQuestion() {
            let results = this.questions.map((q) => q.answear);
            if (this.activeQuestion === this.questions.length - 1) {
                this.finishQuiz();
            } else {
                this.activeQuestion++;
            }
        },

        finishQuiz() {
            this.quizFinished = true;
        },
    },
};
</script>