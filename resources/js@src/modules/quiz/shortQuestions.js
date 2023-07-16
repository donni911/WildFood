export default [
  {
    id: "0",
    question: "Who is your furry?",
    name: "furry",
    variantInput: {
      title: "furryName",
      value: null,
    },
    variants: [
      {
        bgImage: "https://i.ibb.co/7nmg5xM/cat-quiz.png",
        icon: "cat",
        title: "Cat",
      },
      {
        bgImage: "https://i.ibb.co/zWvdFwd/dog-quiz.png",
        icon: "dog",
        title: "Dog",
      },
    ],
    answear: null,
    type: "inputDouble",
  },
  {
    id: "1",
    question: "How old is your pet?",
    name: "old",
    variants: [
      {
        title: "age",
        value: null,
      },
      {
        title: "months",
        value: null,
      },
    ],
    answear: null,
    type: "input",
  },
  {
    id: "2",
    question: "How would you describe your pet's body condition?",
    name: "condition",
    variants: [
      {
        title: "Underweight",
      },
      {
        title: "Just Right",
      },
      {
        title: "Overweight",
      },
    ],
    answear: null,
    type: "triple",
  },
  {
    id: "3",
    question: "What is their daily activity level?",
    name: "activity",
    variants: [
      {
        title: "Low",
      },
      {
        title: "Average",
      },
      {
        title: "High",
      },
    ],
    answear: null,
    type: "triple",
  },
  {
    id: "4",
    name: "weight",
    question: "Please write your pet's current weight in lb.",
    variants: [{ title: "weight", value: "" }],
    answear: null,
    type: "inputSingle",
  },
  {
    id: "5",
    preFinal: true,
    question: "What kind of food does your pet eat?",
    name: "kindOfFood",
    variants: [
      {
        type:'kibble',
        title: "Kibble and/or wet food",
      },
      {
        type:'raw',
        title: "Raw food",
      },
      {
        type:'fresh',
        title: "Fresh cooked food",
      },
    ],
    answear: null,
    type: "triple",
  },
  {
    id: "6",
    final: true,
    name: "mail",
    variants: [
      {
        title: "mail",
        value: null,
      },
    ],
    question: "Your Mail",
    answear: null,
    type: "mail",
  },
];
