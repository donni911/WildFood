
<template>
    <div
        class="gap-5 h-full"
        :class="{
            'grid grid-cols-2': question.type == 'double',
            'grid sm:grid-cols-3': question.type == 'triple',
            'grid sm:grid-cols-2 md:grid-cols-4': question.type == 'quarter',
            'flex flex-wrap': question.type == 'multiple',
            grid: question.type == 'input',
        }"
    >
        <template v-if="question.type === 'input'">
            <InputQuestion :question="question" />
        </template>
        <template v-else-if="question.type === 'mail'">
            <InputMail :question="question" @choosedVariant="choosedVariant" />
        </template>
        <template v-else>
            <ListQuestion
                :question="question"
                @choosedVariant="choosedVariant"
            />
        </template>
    </div>
</template>

<script>
import ListQuestion from "./ListQuestion.vue";
import InputMail from "./InputMail.vue";
import InputQuestion from "./InputQuestion.vue";

export default {
    components: {
        ListQuestion,
        InputQuestion,
        InputMail,
    },
    props: {
        question: {
            type: Object,
        },
    },

    methods: {
        choosedVariant(value) {
            this.$emit("choosedVariant", value);
        },
    },
};
</script>