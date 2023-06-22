<template>
    <button
        class="bg-local hover:opacity-80 p-4"
        :class="{
            'c-gradient bg-no-repeat bg-center bg-cover': bgImage,
        }"
        :style="{
            backgroundImage: bgImage && `url(../../../img/${bgImage})`,
        }"
    >
        <div class="relative z-10 flex items-center justify-center h-full">
            <span
                class="font-semibold text-primary flex items-center gap-3 text-5.5"
                :class="{
                    'text-white': bgImage,
                }"
            >
                <Icon v-if="icon" :name="icon" />
                {{ title }}
            </span>
        </div>
    </button>
</template>

<script>
import Icon from "../Icon.vue";
export default {
    components: {
        Icon,
    },
    props: {
        bgImage: {
            type: String,
        },
        icon: {
            type: String,
        },
        title: {
            type: String,
        },
    },
};
</script>