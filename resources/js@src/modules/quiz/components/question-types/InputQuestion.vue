<template>
    <div
        class="bg-local rounded-[32px] w-full flex items-center justify-center p-4"
    >
        <input
            ref="input"
            type="text"
            v-model="question.answear"
            class="w-full outline-none border-0 text-primary font-bold text-10 lg:text-12 bg-transparent text-center placeholder:text-primary placeholder:opacity-50"
            placeholder="999lb"
        />
    </div>
</template>

<script>
export default {
    props: {
        question: {
            type: Object,
        },
    },

    mounted() {
        this.$refs.input.focus();
    },
};
</script>