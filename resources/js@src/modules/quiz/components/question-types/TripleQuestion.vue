<template>
    <BoxIcon
        v-for="question in question.variants"
        :key="question.id"
        :title="question.title"
        class="md:min-h-[196px] rounded-[22px] sm:rounded-[32px]"
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
};
</script>