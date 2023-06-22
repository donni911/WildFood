<template>
    <button
        class="c-gradient h-[196px] bg-no-repeat bg-center bg-cover rounded-[32px] hover:opacity-80 p-4"
        :style="{
            backgroundImage: `url(../../../img/${bgImage})`,
        }"
    >
        <div class="relative z-10 flex items-center justify-center h-full">
            <span
                class="font-semibold text-white flex items-center gap-3 text-5.5"
            >
                <Icon :name="icon" />
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