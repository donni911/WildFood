<template>
    <div class="c-quiz">
        <div
            class="min-h-[320px] md:min-h-[475px] w-full flex flex-col bg-white p-4 md:p-[32px]"
        >
            <div
                v-if="!quizFinished"
                class="sm-max:flex-col w-full pb-2 md:pb-5 md:border-b-2 md:border-primary flex sm:items-center justify-between gap-5 h-fit"
            >
                <div class="text-primary font-sans text-xs md:text-[24px]">
                    <!-- <span
                class="inline-flex font-manrope font-medium justify-between text-6 md:text-[34px]"
              >
                <transition mode="out-in">
                  <span
                    class="min-w-[32px] md:min-w-[42px]"
                    :key="activeQuestionComputed"
                  >{{ activeQuestionComputed }}</span
                  >
                </transition>
                /
              </span> -->
                    <!-- {{ questionsLength }} -->
                </div>
                <div
                    class="c-quiz__nav w-full flex sm:justify-end gap-1.5 md:gap-3"
                >
                    <button
                        v-if="!finalQuestion"
                        class="f-btn f-btn--primary-ghost h-fit"
                        :disabled="activeQuestion == 0"
                        @click="previousQuestion"
                    >
                        Previous
                    </button>
                    <transition mode="out-in">
                        <button
                            :key="activeQuestion == questions.length - 1"
                            :disabled="
                                !questions[activeQuestion].answear ||
                                (questions[activeQuestion].type === 'mail' &&
                                    !isMailValid)
                            "
                            class="f-btn f-btn--primary-ghost h-fit"
                            @click="
                                finalQuestion ? finishQuiz() : nextQuestion()
                            "
                            v-html="finalQuestion ? 'Finish' : 'Next'"
                        ></button>
                    </transition>
                </div>
            </div>

            <transition mode="out-in">
                <div
                    :key="questions[activeQuestion].id"
                    class="flex flex-grow pt-2 md:pt-[32px]"
                >
                    <div
                        v-if="!quizFinished"
                        class="flex w-full flex-col justify-between"
                    >
                        <h3
                            :key="questions[activeQuestion].question"
                            class="font-semibold md:text-9 mb-4"
                            :class="{
                                'md:mb-4': questions[activeQuestion]?.subtitle,
                                'md:mb-12':
                                    !questions[activeQuestion]?.subtitle,
                            }"
                        >
                            {{ questions[activeQuestion].question }}
                        </h3>
                        <p
                            v-if="questions[activeQuestion].subtitle"
                            :key="questions[activeQuestion].subtitle"
                            class="color-primary opacity-30 font-medium mb-4"
                            v-html="questions[activeQuestion]?.subtitle"
                        ></p>
                        <div
                            class="gap-5 h-full"
                            :class="{
                                'grid grid-cols-2':
                                    questions[activeQuestion].type == 'double',
                                'grid sm:grid-cols-3':
                                    questions[activeQuestion].type == 'triple',
                                'grid sm:grid-cols-2 md:grid-cols-4':
                                    questions[activeQuestion].type == 'quarter',
                                'flex flex-wrap':
                                    questions[activeQuestion].type ==
                                    'multiple',
                                grid: questions[activeQuestion].type == 'input',
                            }"
                        >
                            <template
                                v-if="questions[activeQuestion].type === 'mail'"
                            >
                                <div class="flex flex-col">
                                    <h5 class="font-semibold text-5 mb-5">
                                        Email
                                    </h5>
                                    <div
                                        class="bg-local h-full rounded-2xl w-full flex items-center justify-center p-4"
                                    >
                                        <input
                                            ref="input"
                                            type="mail"
                                            v-model="
                                                questions[activeQuestion]
                                                    .answear
                                            "
                                            @change="
                                                choosedVariant({
                                                    mail: questions[
                                                        activeQuestion
                                                    ].answear,
                                                })
                                            "
                                            class="w-full outline-none flex-grow border-0 text-primary font-bold text-6 lg:text-8 bg-transparent text-center placeholder:text-primary placeholder:opacity-50"
                                            placeholder="mail@mail.com"
                                        />
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <label
                                    v-for="variant in questions[activeQuestion]
                                        .variants"
                                    :key="variant.id"
                                    class="bg-local hover:opacity-80 p-4 cursor-pointer transition"
                                    :class="{
                                        'c-gradient bg-no-repeat bg-center bg-cover':
                                            variant.bgImage,
                                        'bg-yellow pointer-events-none':
                                            variant.title ===
                                            questions[activeQuestion].answear
                                                .title,
                                        'opacity-50':
                                            variant.title ===
                                                questions[activeQuestion]
                                                    .answear.title &&
                                            variant.bgImage,
                                        'min-w-[150px] max-h-[90px] rounded-[22px] flex-grow':
                                            questions[activeQuestion].type ===
                                            'multiple',
                                        'md:min-h-[196px] rounded-[22px] sm:rounded-[32px]':
                                            questions[activeQuestion].type !==
                                            'multiple',
                                    }"
                                    :style="{
                                        backgroundImage:
                                            variant.bgImage &&
                                            `url(${variant.bgImage})`,
                                    }"
                                >
                                    <input
                                        :value="variant.title"
                                        :name="questions[activeQuestion].name"
                                        type="radio"
                                        class="hidden"
                                        v-model="selectedValue"
                                        @change="handleSelection(variant)"
                                    />
                                    <div
                                        class="relative z-10 flex items-center justify-center h-full"
                                    >
                                        <span
                                            class="font-semibold text-primary flex text-center justify-center items-center transition-colors gap-3 text-5.5"
                                            :class="{
                                                'text-white':
                                                    variant.bgImage ||
                                                    variant.title ===
                                                        questions[
                                                            activeQuestion
                                                        ].answear.title,
                                            }"
                                        >
                                            <template
                                                v-if="
                                                    variant.icon &&
                                                    variant.icon == 'dog'
                                                "
                                            >
                                                <svg
                                                    width="24"
                                                    height="25"
                                                    viewBox="0 0 24 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.07888 10.0832C-0.861711 10.0832 0.0888684 3.37035 1.78003 1.95016C3.05975 0.874956 5.73577 0.581718 7.10121 0.501222C7.51179 0.477264 7.81436 0.809792 7.68407 1.13657C6.81321 3.31477 3.88261 10.0832 1.07888 10.0832Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M16.3165 1.1374C16.1854 0.809663 16.4888 0.477135 16.8994 0.502051C18.2648 0.582547 20.9408 0.875785 22.2205 1.95099C23.9117 3.37022 24.8614 10.0831 22.9208 10.0831C20.1171 10.0831 17.1865 3.31464 16.3165 1.1374Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M20.5647 10.5795C18.6301 9.06155 16.9347 5.93656 15.6481 2.93902C14.6358 2.60266 13.4289 2.41675 12 2.41675C10.5712 2.41675 9.3643 2.60266 8.35201 2.93902C7.06542 5.93656 5.36998 9.06155 3.43539 10.5795C3.32482 14.6014 6.55285 16.4212 6.76285 20.0877C6.79714 20.6626 6.28285 21.5922 6.28285 22.2246C6.28285 24.3521 8.57144 25.4158 12 23.4992C15.4286 25.4158 17.7172 24.3521 17.7172 22.2246C17.7172 21.5922 17.2029 20.6626 17.2372 20.0877C17.4481 16.4116 20.6753 14.5804 20.5647 10.5795ZM8.14286 11.9997C7.43314 11.9997 6.85714 11.3557 6.85714 10.5622C6.85714 9.76877 7.43314 9.12479 8.14286 9.12479C8.85258 9.12479 9.42859 9.76877 9.42859 10.5622C9.42859 11.3557 8.85258 11.9997 8.14286 11.9997ZM12 19.666C11.2303 19.666 9.52544 17.4591 9.91373 16.6033C10.38 15.576 13.6192 15.576 14.0855 16.6033C14.4746 17.4591 12.7698 19.666 12 19.666ZM15.8572 11.9997C15.1475 11.9997 14.5715 11.3557 14.5715 10.5622C14.5715 9.76877 15.1475 9.12479 15.8572 9.12479C16.5669 9.12479 17.1429 9.76877 17.1429 10.5622C17.1429 11.3557 16.5669 11.9997 15.8572 11.9997Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </template>
                                            <template
                                                v-if="
                                                    variant.icon &&
                                                    variant.icon == 'cat'
                                                "
                                            >
                                                <svg
                                                    width="24"
                                                    height="25"
                                                    viewBox="0 0 24 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M5.92105 21.9708C7.69737 22.8789 9.69079 23.3524 11.6842 23.3919C11.7829 23.3919 11.9013 23.3919 12 23.3919C14.0132 23.3919 16.0066 22.9577 17.8224 22.0893C19.4801 21.2998 20.9803 20.1156 22.0857 18.6353C23.3487 16.9377 24 14.905 24 12.793C24 11.4509 24 10.1285 24 8.78642C24 7.3259 24 5.88511 24 4.42458C24 3.91142 24 3.39826 24 2.90484C24 1.97721 23.0726 1.36537 22.2237 1.70089L17.7237 3.57589C17.4276 3.69432 17.0921 3.71405 16.7961 3.59563C15.3355 3.02326 13.7171 2.72721 12 2.72721C10.2829 2.72721 8.66447 3.043 7.20395 3.59563C6.9079 3.71405 6.57237 3.69432 6.27632 3.57589L1.77632 1.7603C0.927632 1.40504 0 2.03662 0 2.96425C0 3.65504 0 4.36557 0 5.05635C0 6.49714 0 7.93793 0 9.39846C0 10.6221 0 11.8261 0 13.0498C0 15.0037 0.631579 16.8985 1.75658 18.4774C2.82237 19.9577 4.2829 21.1419 5.92105 21.9708ZM16.3816 12.8327C17.4671 12.8327 18.3553 13.7208 18.3553 14.8064C18.3553 15.8919 17.4671 16.78 16.3816 16.78C15.2961 16.78 14.4079 15.8919 14.4079 14.8064C14.4079 13.7013 15.2961 12.8327 16.3816 12.8327ZM7.61842 12.8327C8.70395 12.8327 9.5921 13.7208 9.5921 14.8064C9.5921 15.8919 8.70395 16.78 7.61842 16.78C6.53289 16.78 5.64474 15.8919 5.64474 14.8064C5.64474 13.7013 6.53289 12.8327 7.61842 12.8327Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </template>
                                            {{ variant.title }}
                                        </span>
                                    </div>
                                </label>
                            </template>
                        </div>
                    </div>
                    <div
                        v-else
                        class="flex flex-col justify-center items-center w-full"
                    >
                        <h3 class="text-10 font-bold mb-2 text-primary">
                            Your result!
                        </h3>
                        <h3
                            class="text-2xl font-bold mb-2"
                            v-html="`Email - ${result.mail}`"
                        ></h3>
                        <a
                            :href="result.url"
                            class="text-xl font-semibold mb-5"
                            v-html="`Try this - ${result.url}`"
                        ></a>
                        <button
                            class="f-btn f-btn--primary-ghost"
                            @click="restartQuiz"
                        >
                            Try again
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            activeQuestion: 0,
            quizFinished: false,
            variant: null,
            previousQuestions: [],
            result: {
                mail: "",
                url: "",
            },
            questions: [
                {
                    id: "0",
                    question: "Who is your furry?",
                    name: "pet",
                    variants: [
                        {
                            bgImage: "https://i.ibb.co/7nmg5xM/cat-quiz.png",
                            icon: "cat",
                            title: "Cat",
                            next: 12,
                        },
                        {
                            bgImage: "https://i.ibb.co/zWvdFwd/dog-quiz.png",
                            icon: "dog",
                            title: "Dog",
                            next: 2,
                        },
                    ],
                    answear: "",
                    type: "double",
                },
                {
                    id: "1",
                    question: "Current Weight",
                    subtitle: "Write the weight of your pet",
                    answear: "",
                    type: "input",
                },
                {
                    id: "2",
                    question: "How old is your pet?",
                    name: "old",
                    variants: [
                        {
                            title: "Up to 8 months",
                            next: 3,
                        },
                        {
                            title: "8-12 months",
                            next: 3,
                        },
                        {
                            title: "More than 12 months",
                            next: 8,
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "3",
                    question: "Body condition",
                    name: "condition",
                    variants: [
                        {
                            title: "Underweight",
                            next: 4,
                        },
                        {
                            title: "Just Right",
                            next: 4,
                        },
                        {
                            title: "Overweight",
                            next: 4,
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "4",
                    question: "Daily Activity",
                    name: "activity",
                    variants: [
                        {
                            title: "Low",
                            next: 11,
                        },
                        {
                            title: "Average",
                            next: 11,
                        },
                        {
                            title: "High",
                            next: 11,
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "5",
                    question: "What food is your pet currently eating?",
                    variants: [
                        {
                            title: "Kibble",
                        },
                        {
                            title: "Wet / canned",
                        },
                        {
                            title: "Cooked",
                        },
                        {
                            title: "Raw",
                        },
                    ],
                    answear: "",
                    type: "quarter",
                    input: "checkbox",
                },
                {
                    id: "6",
                    question: "What proteins does your pet not like?",
                    variants: [
                        {
                            title: "Chicken",
                        },
                        {
                            title: "Fish",
                        },
                        {
                            title: "Beef",
                        },
                        {
                            title: "Turkey",
                        },
                        {
                            title: "Pork",
                        },
                        {
                            title: "Duck",
                        },

                        {
                            title: "Quail",
                        },
                    ],
                    answear: "",
                    type: "multiple",
                    input: "checkbox",
                },
                {
                    id: "7",
                    final: true,
                    question: "Your Mail",
                    answear: "",
                    type: "mail",
                },
                {
                    id: "8",
                    question: "Body condition",
                    name: "condition",
                    variants: [
                        {
                            title: "Underweight / Just Right",
                            next: 9,
                        },
                        {
                            title: "Overweight",
                            next: 10,
                        },
                    ],
                    answear: "",
                    type: "double",
                },
                {
                    id: "9",
                    preFinal: true,
                    question: "What weight?",
                    variants: [
                        {
                            title: "<6",
                            result: "14",
                        },
                        {
                            title: "7-11",
                            result: "21",
                        },
                        {
                            title: "12-15",
                            result: "24",
                        },
                        {
                            title: "16-19",
                            result: "30",
                        },
                        {
                            title: "20-23",
                            result: "36",
                        },
                        {
                            title: ">24",
                            result: "42",
                        },
                    ],
                    answear: "",
                    type: "multiple",
                },
                {
                    id: "10",
                    preFinal: true,
                    question: "What weight?",
                    variants: [
                        {
                            title: "<15",
                            result: "14",
                        },
                        {
                            title: "16-20",
                            result: "20",
                        },
                        {
                            title: "21-27",
                            result: "28",
                        },
                        {
                            title: "28-31",
                            result: "30",
                        },
                        {
                            title: ">32",
                            result: "34",
                        },
                    ],
                    answear: "",
                    type: "multiple",
                },
                {
                    id: "11",
                    preFinal: true,
                    question: "What weight?",
                    variants: [
                        {
                            title: "3-5",
                            result: "28",
                        },
                        {
                            title: "6-7",
                            result: "42",
                        },
                        {
                            title: "8-9",
                            result: "56",
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "12",
                    question: "How old is your pet?",
                    name: "old",
                    variants: [
                        {
                            title: "Up to 8 months",
                            next: 13,
                        },
                        {
                            title: "8-12 months",
                            next: 14,
                        },
                        {
                            title: "More than 12 months",
                            next: 17,
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "13",
                    question: "Body condition",
                    name: "condition",
                    variants: [
                        {
                            title: "Underweight",
                            next: 4,
                        },
                        {
                            title: "Just Right",
                            next: 4,
                        },
                        {
                            title: "Overweight",
                            next: 4,
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "14",
                    question: "Body condition",
                    name: "condition",
                    variants: [
                        {
                            title: "Underweight",
                            next: 15,
                        },
                        {
                            title: "Just Right",
                            next: 15,
                        },
                        {
                            title: "Overweight",
                            next: 15,
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "15",
                    question: "Daily Activity",
                    name: "activity",
                    variants: [
                        {
                            title: "Low",
                            next: 16,
                        },
                        {
                            title: "Average",
                            next: 16,
                        },
                        {
                            title: "High",
                            next: 16,
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "16",
                    preFinal: true,
                    question: "What weight?",
                    variants: [
                        {
                            title: "4-6",
                            result: "28",
                        },
                        {
                            title: "7-9",
                            result: "42",
                        },
                        {
                            title: "10-12",
                            result: "56",
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "17",
                    question: "Body condition",
                    name: "condition",
                    variants: [
                        {
                            title: "Underweight",
                            next: 18,
                        },
                        {
                            title: "Just Right",
                            next: 20,
                        },
                        {
                            title: "Overweight",
                            next: 24,
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "18",
                    question: "Daily Activity",
                    name: "activity",
                    variants: [
                        {
                            title: "Low",
                            next: 19,
                        },
                        {
                            title: "Average",
                            next: 19,
                        },
                        {
                            title: "High",
                            next: 19,
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "19",
                    preFinal: true,
                    question: "What weight?",
                    variants: [
                        {
                            title: "<6",
                            result: "28",
                        },
                        {
                            title: ">7",
                            result: "42",
                        },
                    ],
                    answear: "",
                    type: "double",
                },
                {
                    id: "20",
                    question: "Daily Activity",
                    name: "activity",
                    variants: [
                        {
                            title: "Low",
                            next: 21,
                        },
                        {
                            title: "Average",
                            next: 22,
                        },
                        {
                            title: "High",
                            next: 23,
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "21",
                    preFinal: true,
                    question: "What weight?",
                    variants: [
                        {
                            title: "<6",
                            result: "14",
                        },
                        {
                            title: "7-13",
                            result: "28",
                        },
                        {
                            title: ">14",
                            result: "42",
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "22",
                    preFinal: true,
                    question: "What weight?",
                    variants: [
                        {
                            title: "<6",
                            result: "21",
                        },
                        {
                            title: "7-9",
                            result: "28",
                        },
                        {
                            title: ">10",
                            result: "42",
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "23",
                    preFinal: true,
                    question: "What weight?",
                    variants: [
                        {
                            title: "<6",
                            result: "28",
                        },
                        {
                            title: "7-9",
                            result: "35",
                        },
                        {
                            title: "10-12",
                            result: "48",
                        },
                        {
                            title: ">13",
                            result: "58",
                        },
                    ],
                    answear: "",
                    type: "multiple",
                },
                {
                    id: "24",
                    question: "Daily Activity",
                    name: "activity",
                    variants: [
                        {
                            title: "Low",
                            next: 25,
                        },
                        {
                            title: "Average",
                            next: 25,
                        },
                        {
                            title: "High",
                            next: 25,
                        },
                    ],
                    answear: "",
                    type: "triple",
                },
                {
                    id: "25",
                    preFinal: true,
                    question: "What weight?",
                    variants: [
                        {
                            title: "<13",
                            result: "28",
                        },
                        {
                            title: ">13",
                            result: "42",
                        },
                    ],
                    answear: "",
                    type: "double",
                },
            ],
        };
    },

    methods: {
        handleSelection(variant) {
            this.questions[this.activeQuestion].answear = variant;
            this.choosedVariant(variant);
        },
        choosedVariant(variant) {
            if (variant.mail) {
                this.result.mail = variant.mail;
            } else {
                this.variant = variant;
            }
        },
        nextQuestion() {
            if (this.questions[this.activeQuestion]?.preFinal) {
                this.result.url = this.variant.result;
                this.activeQuestion = 7;
            } else {
                this.previousQuestions.push(this.activeQuestion);
                this.activeQuestion = this.variant.next;
                // this.variant = null;
            }
        },
        previousQuestion() {
            this.resetAnswers();
            if (this.previousQuestions.length > 0) {
                const currentQuestion = this.questions[this.activeQuestion];
                currentQuestion.answear = "";
                this.variant = null;
                this.activeQuestion = this.previousQuestions.pop();
            }
        },
        finishQuiz() {
            this.quizFinished = true;
        },
        restartQuiz() {
            this.activeQuestion = 0;
            this.quizFinished = false;
            this.variant = null;
            this.previousQuestions = [];
            this.result.mail = "";
            this.result.url = "";
            this.resetAnswers();
        },
        resetAnswers() {
            for (let i = 0; i < this.questions.length; i++) {
                this.questions[i].answear = "";
            }
        },
    },
    computed: {
        finalQuestion() {
            return this.questions[this.activeQuestion].final;
        },
        activeQuestionComputed() {
            const questionIndex = this.activeQuestion + 1;
            return questionIndex >= 10
                ? questionIndex.toString()
                : "0" + questionIndex;
        },
        questionsLength() {
            return this.questions.length >= 10
                ? this.questions.length
                : "0" + this.questions.length;
        },
        isMailValid() {
            let mailQuestion = this.questions.find((q) => q.type === "mail");
            return mailQuestion.answear.includes("@");
        },
    },
};
</script>