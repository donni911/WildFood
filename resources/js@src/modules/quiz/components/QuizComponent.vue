<template>
    <div class="c-quiz">
        <div
            class="md:min-h-[460px] w-full flex flex-col bg-white p-4 md:p-[32px]"
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
                        @click="activeQuestion++"
                    >
                        Previous
                    </button>
                    <button
                        class="f-btn f-btn--primary-ghost h-fit"
                        :disabled="activeQuestion == questions.length - 1"
                        @click="activeQuestion--"
                    >
                        Next
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
                        class="grid gap-5 h-full"
                        :class="{
                            'grid-cols-2':
                                questions[activeQuestion].type == 'double',
                            '': questions[activeQuestion].type == 'input',
                        }"
                    >
                        <template v-if="questions[activeQuestion].type">
                            <DoubleQuestion
                                :question="questions[activeQuestion]"
                            />
                        </template>
                        <template v-if="questions[activeQuestion].type">
                            <InputQuestion
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

export default {
    data() {
        return {
            activeQuestion: 1,
            questions,
        };
    },

    components: {
        DoubleQuestion,
        InputQuestion,
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
    mounted() {
        console.log("Questions:", questions);
        console.log("Active Question:", this.activeQuestion);
        console.log("Current Question:", this.questions[this.activeQuestion]);
    },
};
</script>
