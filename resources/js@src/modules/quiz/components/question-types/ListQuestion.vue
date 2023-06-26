<template>
    <CheckboxButton
        v-if="question.input === 'checkbox'"
        v-for="variant in question.variants"
        @selection-change="handleCheckbox"
        :key="variant.id"
        :bgImage="variant.bgImage"
        :icon="variant.icon"
        :title="variant.title"
        :class="className"
        :name="question.name"
        :isActive="isSelectedCheckbox(variant.title)"
        :selectedValues="selectedCheckboxValues"
    />
    <RadioButton
        v-else
        v-for="variant in question.variants"
        @selection-change="handleSelection"
        :key="variant.id"
        :bgImage="variant.bgImage"
        :icon="variant.icon"
        :title="variant.title"
        :class="className"
        :name="question.name"
        :isActive="variant.title === question.answear"
    />
</template>
  
<script>
import RadioButton from "../boxes/RadioButton.vue";
import CheckboxButton from "../boxes/CheckboxButton.vue";

export default {
    props: {
        question: Object,
    },

    components: {
        RadioButton,
        CheckboxButton,
    },

    data() {
        return {
            selectedCheckboxValues: [],
        };
    },

    computed: {
        className() {
            if (this.question.type === "multiple") {
                return "min-w-[150px] max-h-[90px] rounded-[22px] flex-grow";
            } else {
                return "md:min-h-[196px] rounded-[22px] sm:rounded-[32px]";
            }
        },
    },

    methods: {
        handleSelection(selectedValue) {
            this.question.answear = selectedValue;
        },

        handleCheckbox(selectedValues) {
            let isInArr = this.selectedCheckboxValues.includes(selectedValues);
            if (isInArr) {
                this.selectedCheckboxValues =
                    this.selectedCheckboxValues.filter(
                        (value) => value !== selectedValues
                    );
            } else {
                this.selectedCheckboxValues.push(selectedValues);
            }
            this.question.answear = this.selectedCheckboxValues;
        },

        isSelectedCheckbox(value) {
            return this.selectedCheckboxValues.includes(value);
        },
    },

    mounted() {
        if (this.question.input === "checkbox" && this.question.answear) {
            this.question.answear.forEach((value) => {
                if (!this.selectedCheckboxValues.includes(value)) {
                    this.selectedCheckboxValues.push(value);
                }
            });
        }
    },
};
</script>