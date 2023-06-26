<template>
    <div class="grid grid-cols-2">
        <div v-for="result in results" :key="result" class="col-span-2">
            <h3 class="font-semibold mb-2">{{ result.question }}</h3>
            <p class="font-semibold text-xs mb-5">{{ result.answear }}</p>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        results: {
            type: Array,
        },
    },
};
</script>