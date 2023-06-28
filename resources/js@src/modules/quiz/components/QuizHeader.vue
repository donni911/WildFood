<template>
    <div
        class="sm-max:flex-col w-full pb-2 md:pb-5 md:border-b-2 md:border-primary flex sm:items-center justify-between gap-5 h-fit"
    >
        <div class="text-primary font-sans text-xs md:text-[24px]">
            <!-- <span
                class="inline-flex font-manrope font-medium justify-between text-6 md:text-[34px]"
            >
                <transition mode="out-in">
                    <span
                        class="min-w-[32px] md:min-w-[42px]"
                        :key="activeQuestionComputed"
                        >{{ activeQuestionComputed }}</span
                    >
                </transition>
                /
            </span> -->
            <!-- {{ questionsLength }} -->
        </div>
        <div class="c-quiz__nav sm:w-1/2 flex sm:justify-end gap-1.5 md:gap-3">
            <button
                v-if="!finalQuestion"
                class="f-btn f-btn--primary-ghost h-fit"
                :disabled="activeQuestion == 0"
                @click="$emit('previousQuestion')"
            >
                Previous
            </button>
            <transition mode="out-in">
                <button
                    :key="activeQuestion == questions.length - 1"
                    :disabled="
                        !questions[activeQuestion].answear ||
                        (questions[activeQuestion].type === 'mail' &&
                            !isMailValid)
                    "
                    class="f-btn f-btn--primary-ghost h-fit"
                    @click="
                        finalQuestion ? $emit('result') : $emit('nextQuestion')
                    "
                >
                    {{ finalQuestion ? "Finish" : "Next" }}
                </button>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        questions: {
            type: Array,
        },
        activeQuestion: {
            type: Number,
        },
    },

    computed: {
        finalQuestion() {
            return this.questions[this.activeQuestion].final;
        },

        activeQuestionComputed() {
            const questionIndex = this.activeQuestion + 1;
            return questionIndex >= 10
                ? questionIndex.toString()
                : "0" + questionIndex;
        },

        questionsLength() {
            return this.questions.length >= 10
                ? this.questions.length
                : "0" + this.questions.length;
        },

        isMailValid() {
            let mailQuestion = this.questions.find((q) => q.type === "mail");
            return mailQuestion.answear.includes("@");
        },
    },
};
</script>