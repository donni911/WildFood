<template>
    <BoxIcon
        v-for="question in question.variants"
        :key="question.id"
        :bgImage="question.bgImage"
        :icon="question.icon"
        :title="question.title"
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
