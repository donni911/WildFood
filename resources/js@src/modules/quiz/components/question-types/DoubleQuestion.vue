<template>
    <BoxIcon
        v-for="question in question.variants"
        :key="question.id"
        :bgImage="question.bgImage"
        :icon="question.icon"
        :title="question.title"
        :class="className"
    />
</template>

<script>
import BoxIcon from "../boxes/BoxIcon.vue";

export default {
    props: {
        question: Object,
    },

    components: {
        BoxIcon,
    },

    computed: {
        className() {
            if (this.question.type == "multiple") {
                return "min-w-[150px] max-h-[90px] rounded-[22px] flex-grow";
            } else {
                return "md:min-h-[196px] rounded-[22px] sm:rounded-[32px]";
            }
        },
    },
    mounted() {
        console.log(this.question.type);
    },
};
</script>
