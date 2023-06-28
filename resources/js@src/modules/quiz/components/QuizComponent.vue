 <template>
    <div class="c-quiz">
        <div
            class="min-h-[320px] md:min-h-[475px] w-full flex flex-col bg-white p-4 md:p-[32px]"
        >
            <QuizHeader
                v-if="!quizFinished"
                :questions="questions"
                :activeQuestion="activeQuestion"
                @previousQuestion="previousQuestion"
                @nextQuestion="nextQuestion"
                @result="finishQuiz"
            />

            <transition mode="out-in">
                <div
                    :key="questions[activeQuestion].id"
                    class="flex flex-grow pt-2 md:pt-[32px]"
                >
                    <div
                        v-if="!quizFinished"
                        class="flex w-full flex-col justify-between"
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
                            @choosedVariant="choosedVariant"
                        />
                    </div>
                    <QuizResults
                        @restart="restartQuiz"
                        :results="result"
                        v-else
                    />
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
            activeQuestion: 0,
            questions,
            quizFinished: false,
            variant: null,
            previousQuestions: [],
            result: {
                mail: "",
                url: "",
            },
        };
    },

    components: {
        QuestionsController,
        QuizHeader,
        QuizResults,
    },

    methods: {
        choosedVariant(variant) {
            if (variant.mail) {
                this.result.mail = variant.mail;
            } else {
                this.variant = variant;
            }
        },

        nextQuestion() {
            console.log(this.variant);
            if (this.questions[this.activeQuestion]?.preFinal) {
                this.result.url = this.variant.result;
                this.activeQuestion = 7;
            } else {
                this.previousQuestions.push(this.activeQuestion);
                this.activeQuestion = this.variant.next;
                // this.variant = null;
            }
        },

        previousQuestion() {
            this.resetAnswers();
            if (this.previousQuestions.length > 0) {
                const currentQuestion = this.questions[this.activeQuestion];
                currentQuestion.answear = "";
                this.variant = null;
                this.activeQuestion = this.previousQuestions.pop();
            }
        },

        finishQuiz() {
            this.quizFinished = true;
        },

        restartQuiz() {
            this.activeQuestion = 0;
            this.quizFinished = false;
            this.variant = null;
            this.previousQuestions = [];
            this.result.mail = "";
            this.result.url = "";
            this.resetAnswers();
        },
        resetAnswers() {
            for (let i = 0; i < this.questions.length; i++) {
                this.questions[i].answear = "";
            }
        },
    },
};
</script>
