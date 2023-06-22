<template>
    <div class="c-quiz">
        <div
            class="md:min-h-[460px] w-full flex flex-col bg-white p-4 md:p-[32px]"
        >
            <div
                class="flex-wrap w-full pb-2 md:pb-5 md:border-b-2 md:border-primary flex items-center justify-between gap-5 h-fit"
            >
                <div
                    class="c-quiz__counter text-primary font-bold font-manrope text-xs md:text-[24px]"
                >
                    <span class="text-6 md:text-[34px]">01 / </span> 08
                </div>
                <div class="c-quiz__nav flex gap-1.5 md:gap-3">
                    <button class="f-btn f-btn--primary-ghost h-fit" disabled>
                        Previous
                    </button>
                    <button class="f-btn f-btn--primary-ghost h-fit">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex flex-grow pt-2 md:pt-[32px]">
                <div class="flex w-full flex-col justify-between">
                    <h3 class="font-semibold md:text-9 mb-4 md:mb-12">
                        Who is your furry?
                    </h3>
                    <div class="grid grid-cols-2 gap-5 h-full">
                        <BoxIcon
                            :bgImage="'cat-quiz.png'"
                            :icon="'cat'"
                            :title="'Cat'"
                        />
                        <BoxIcon
                            :bgImage="'dog-quiz.png'"
                            :icon="'dog'"
                            :title="'Dog'"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import BoxIcon from "./boxes/BoxIcon.vue";
export default {
    components: {
        BoxIcon,
    },
};
</script>
