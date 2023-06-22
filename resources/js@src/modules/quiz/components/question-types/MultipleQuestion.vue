<template>
    <BoxIcon
        v-for="question in question?.variants"
        :key="question?.id"
        :title="question?.title"
        class="min-w-[150px] max-h-[90px] rounded-[22px] flex-grow"
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
