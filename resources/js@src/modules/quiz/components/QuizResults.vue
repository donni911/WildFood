<template>
    <div class="flex flex-col justify-center items-center w-full">
        <h3 class="text-10 font-bold mb-2 text-primary">Your result!</h3>
        <h3 class="text-2xl font-bold mb-2">mail - {{ results.mail }}</h3>
        <a :href="results.url" class="text-xl font-semibold mb-5"
            >Try this - {{ results.url }}</a
        >
        <button class="f-btn f-btn--primary-ghost" @click="restartQuiz">
            Try again
        </button>
    </div>
</template>


<script>
export default {
    props: {
        results: {
            type: Object,
        },
    },
    methods: {
        restartQuiz() {
            this.$emit("restart");
        },
    },
};
</script>