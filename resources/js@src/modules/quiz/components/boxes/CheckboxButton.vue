<template>
    <label
        class="bg-local hover:opacity-80 p-4 cursor-pointer transition-opacity"
        :class="{
            'c-gradient bg-no-repeat bg-center bg-cover': bgImage,
            'bg-yellow': isSelected,
        }"
        :style="{
            backgroundImage: bgImage && `url(${bgImage})`,
        }"
    >
        <input
            :value="title"
            :name="name"
            type="checkbox"
            class="hidden"
            :checked="isSelected"
            @change="emitSelection"
        />
        <div class="relative z-10 flex items-center justify-center h-full">
            <span
                class="font-semibold text-primary flex text-center justify-center items-center gap-3 text-5.5"
                :class="{
                    'text-white': bgImage || isSelected,
                }"
            >
                <Icon v-if="icon" :name="icon" />
                {{ title }}
            </span>
        </div>
    </label>
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
        name: {
            type: String,
        },
        isActive: {
            type: Boolean,
        },
        selectedValues: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        isSelected() {
            return this.selectedValues.includes(this.title);
        },
    },
    methods: {
        emitSelection() {
            this.$emit("selection-change", this.title);
        },
    },
};
</script>