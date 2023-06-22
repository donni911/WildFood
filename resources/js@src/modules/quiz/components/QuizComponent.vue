<template>
    <div class="c-quiz">
        <div
            class="min-h-[320px] md:min-h-[460px] w-full flex flex-col bg-white p-4 md:p-[32px]"
        >
            <div
                class="flex-wrap w-full pb-2 md:pb-5 md:border-b-2 md:border-primary flex items-center justify-between gap-5 h-fit"
            >
                <div
                    class="c-quiz__counter text-primary font-bold font-manrope text-xs md:text-[24px]"
                >
                    <span class="text-6 md:text-[34px]"
                        >{{ activeQuestionComputed }} /
                    </span>
                    {{ questionsLength }}
                </div>
                <div class="c-quiz__nav flex gap-1.5 md:gap-3">
                    <button
                        class="f-btn f-btn--primary-ghost h-fit"
                        :disabled="activeQuestion == 0"
                        @click="activeQuestion--"
                    >
                        Previous
                    </button>
                    <button
                        class="f-btn f-btn--primary-ghost h-fit"
                        @click="nextQuestion()"
                    >
                        {{
                            activeQuestion == questions.length - 1
                                ? "Finish"
                                : "Next"
                        }}
                    </button>
                </div>
            </div>
            <div class="flex flex-grow pt-2 md:pt-[32px]">
                <div class="flex w-full flex-col justify-between">
                    <h3
                        :key="questions[activeQuestion].question"
                        class="font-semibold md:text-9 mb-4"
                        :class="{
                            'md:mb-4': questions[activeQuestion]?.subtitle,
                            'md:mb-12': !questions[activeQuestion]?.subtitle,
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
                    <div
                        class="gap-5 h-full"
                        :class="{
                            'grid grid-cols-2':
                                questions[activeQuestion].type == 'double',
                            'grid sm:grid-cols-3':
                                questions[activeQuestion].type == 'triple',
                            'grid sm:grid-cols-2 md:grid-cols-4':
                                questions[activeQuestion].type == 'quarter',
                            'flex flex-wrap':
                                questions[activeQuestion].type == 'multiple',
                            grid: questions[activeQuestion].type == 'input',
                        }"
                    >
                        <template
                            v-if="questions[activeQuestion].type === 'double'"
                        >
                            <DoubleQuestion
                                :question="questions[activeQuestion]"
                            />
                        </template>
                        <template
                            v-if="questions[activeQuestion].type === 'input'"
                        >
                            <InputQuestion
                                :question="questions[activeQuestion]"
                            />
                        </template>
                        <template
                            v-if="
                                questions[activeQuestion].type === 'triple' ||
                                questions[activeQuestion].type === 'quarter'
                            "
                        >
                            <TripleQuestion
                                :question="questions[activeQuestion]"
                            />
                        </template>
                        <template
                            v-if="questions[activeQuestion].type === 'multiple'"
                        >
                            <MultipleQuestion
                                :question="questions[activeQuestion]"
                            />
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import questions from "@data/questions.json";
import DoubleQuestion from "./question-types/DoubleQuestion.vue";
import InputQuestion from "./question-types/InputQuestion.vue";
import TripleQuestion from "./question-types/TripleQuestion.vue";
import MultipleQuestion from "./question-types/MultipleQuestion.vue";

export default {
    data() {
        return {
            activeQuestion: 0,
            questions,
        };
    },

    components: {
        DoubleQuestion,
        InputQuestion,
        TripleQuestion,
        MultipleQuestion,
    },

    computed: {
        questionsLength() {
            return questions.length >= 10
                ? questions.length
                : "0" + questions.length;
        },

        activeQuestionComputed() {
            const questionIndex = this.activeQuestion + 1;
            return questionIndex >= 10
                ? questionIndex.toString()
                : "0" + questionIndex;
        },
    },

    methods: {
        nextQuestion() {
            if (this.activeQuestion === this.questions.length - 1) {
                // Last question, handle finishing the quiz
                this.finishQuiz();
            } else {
                // Move to the next question
                this.activeQuestion++;
            }
        },

        finishQuiz() {
            // Handle finishing the quiz, e.g., submit the answers
            console.log("Quiz finished!");
        },
    },

    mounted() {
        console.log("Questions:", questions);
        console.log("Active Question:", this.activeQuestion);
        console.log("Current Question:", this.questions[this.activeQuestion]);
    },
};
</script>
