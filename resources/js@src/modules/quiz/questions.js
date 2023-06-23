export default [
  {
    id: "1",
    question: "Who is your furry?",
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
    answear: "",
    type: "double",
  },
  {
    id: "2",
    question: "Current Weight",
    subtitle: "Write the weight of your pet",
    answear: "",
    type: "input",
  },
  {
    id: "3",
    question: "How old is your pet?",
    variants: [
      {
        title: "Up to 8 months",
      },
      {
        title: "8-12 months",
      },
      {
        title: "More than 12 months",
      },
    ],
    answear: "",
    type: "triple",
  },
  {
    id: "4",
    question: "Body condition",
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
    answear: "",
    type: "triple",
  },
  {
    id: "5",
    question: "Daily Activity",
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
    answear: "",
    type: "triple",
  },
  {
    id: "6",
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
  },
  {
    id: "7",
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
  },
];
