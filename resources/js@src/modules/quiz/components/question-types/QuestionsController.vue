
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
        <template v-else>
            <DoubleQuestion :question="question" />
        </template>
    </div>
</template>

<script>
import DoubleQuestion from "./DoubleQuestion.vue";
import InputQuestion from "./InputQuestion.vue";

export default {
    components: {
        DoubleQuestion,
        InputQuestion,
    },
    props: {
        question: {
            type: Object,
        },
    },
};
</script>