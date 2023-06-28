<template>
    <div class="flex flex-col">
        <h5 class="font-semibold text-5 mb-5">Email</h5>
        <div
            class="bg-local h-full rounded-2xl w-full flex items-center justify-center p-4"
        >
            <input
                ref="input"
                type="mail"
                v-model="question.answear"
                @change="$emit('choosedVariant', { mail: question.answear })"
                class="w-full outline-none flex-grow border-0 text-primary font-bold text-6 lg:text-8 bg-transparent text-center placeholder:text-primary placeholder:opacity-50"
                placeholder="mail@mail.com"
            />
        </div>
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