export default [
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
];
