<template>
    <label
        class="bg-local hover:opacity-80 p-4 cursor-pointer transition-opacity"
        :class="{
            'c-gradient bg-no-repeat bg-center bg-cover': variant.bgImage,
            'bg-yellow': isSelected,
        }"
        :style="{
            backgroundImage: variant.bgImage && `url(${variant.bgImage})`,
        }"
    >
        <input
            :value="variant.title"
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
                    'text-white': variant.bgImage || isSelected,
                }"
            >
                <Icon v-if="variant.icon" :name="variant.icon" />
                {{ variant.title }}
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
        variant: {
            type: Object,
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
            return this.selectedValues.includes(this.variant.title);
        },
    },
    methods: {
        emitSelection() {
            this.$emit("selection-change", this.variant);
        },
    },
};
</script>