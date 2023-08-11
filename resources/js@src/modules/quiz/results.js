const results = {
  DOG: {
    sm: {
      kibble: [
        {
          range: "<=5",
          result: 2,
        },
        {
          range: ">=6",
          result: 4,
        },
      ],

      raw: [
        {
          range: "<=5",
          result: 7,
        },
        {
          range: ">=6",
          result: 134,
        },
      ],
      
      fresh: [
        {
          range: "<=5",
          result: 2,
        },
        {
          range: ">=6",
          result: 4,
        },
      ],
    },

    md:{
      kibble: [
        {
          range: "<=9",
          result: 2,
        },
        {
          range: ">=10",
          result: 4,
        },
      ],
      raw: [
        {
          range: "<=9",
          result: 2,
        },
        {
          range: ">=10",
          result: 4,
        },
      ],
      fresh: [
        {
          range: "<=9",
          result: 2,
        },
        {
          range: ">=10",
          result: 4,
        },
      ],
    },

    lg: {
      
      kibble: [
        {
          range: "<=13",
          result: 1,
        },
        {
          range: "14-22",
          result: 131,
        },
        {
          range: "23-29",
          result: 2,
        },
        {
          range: "30-37",
          result: 3,
        },
        {
          range: "38-43",
          result: 4,
        },
        {
          range: "44-50",
          result: 132,
        },
        {
          range: ">=51",
          result: 133,
        },
      ],

      raw: [
        {
          range: "<=13",
          result: 5,
        },
        {
          range: "14-22",
          result: 6,
        },
        {
          range: "23-29",
          result: 7,
        },
        {
          range: "30-37",
          result: 8,
        },
        {
          range: "38-43",
          result: 134,
        },
        {
          range: "44-50",
          result: 135,
        },
        {
          range: ">=51",
          result: 136,
        },
      ],

      fresh: [
        {
          range: "<=13",
          result: 1,
        },
        {
          range: "14-22",
          result: 131,
        },
        {
          range: "23-29",
          result: 2,
        },
        {
          range: "30-37",
          result: 3,
        },
        {
          range: "38-43",
          result: 4,
        },
        {
          range: "44-50",
          result: 132,
        },
        {
          range: ">=51",
          result: 133,
        },
      ],
    },
  },
  CAT: {
    moreThanOne: {
      kibble: [
        {
          range: "<=15",
          result: 9,
        },
        {
          range: ">=16",
          result: 10,
        },
      ],
      raw: [
        {
          range: "<=15",
          result: 11,
        },
        {
          range: ">=16",
          result: 12,
        },
      ],
      fresh: [
        {
          range: "<=15",
          result: 111,
        },
        {
          range: ">=16",
          result: 121,
        },
      ],
    },
    lessThanOne: {
      kibble: [
        {
          range: "<=5",
          result: 9,
        },
        {
          range: ">=6",
          result: 10,
        },
      ],
      raw: [
        {
          range: "<=5",
          result: 11,
        },
        {
          range: ">=6",
          result: 12,
        },
      ],
      fresh: [
        {
          range: "<=5",
          result: 111,
        },
        {
          range: ">=6",
          result: 121,
        },
      ],
    },
  },
};

export const proposes = {
  // DOG Gently food
  1: {
    perDay: 1,
    perWeek: 7,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-2?variant=45725477798187",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/11.png?v=1689685483",
        price: 2.92,
        amount: 3,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-2?variant=45725442048299",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/10.png?v=1689685375",
        price: 3.22,
        amount: 2,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-2?variant=45725490020651",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/12.png?v=1689685550",
        price: 3.12,
        amount: 2,
      },
    },
  },
  131: {
    perDay: 1.5,
    perWeek: 11,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-2?variant=45725477798187",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/11.png?v=1689685483",
        price: 2.92,
        amount: 3,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-2?variant=45725442048299",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/10.png?v=1689685375",
        price: 3.22,
        amount: 2,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-2?variant=45725490020651",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/12.png?v=1689685550",
        price: 3.12,
        amount: 2,
      },
    },
  },
  2: {
    perDay: 2,
    perWeek: 14,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-2?variant=45725477798187",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/11.png?v=1689685483",
        price: 2.92,
        amount: 5,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-2?variant=45725442048299",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/10.png?v=1689685375",
        price: 3.22,
        amount: 5,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-2?variant=45725490020651",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/12.png?v=1689685550",
        price: 3.12,
        amount: 4,
      },
    },
  },
  3: {
    perDay: 2.5,
    perWeek: 18,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-2?variant=45725477798187",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/11.png?v=1689685483",
        price: 2.92,
        amount: 7,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-2?variant=45725442048299",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/10.png?v=1689685375",
        price: 3.22,
        amount: 7,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-2?variant=45725490020651",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/12.png?v=1689685550",
        price: 3.12,
        amount: 7,
      },
    },
  },
  4: {
    perDay: 3,
    perWeek: 21,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-2?variant=45725477798187",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/11.png?v=1689685483",
        price: 2.92,
        amount: 10,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-2?variant=45725442048299",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/10.png?v=1689685375",
        price: 3.22,
        amount: 9,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-2?variant=45725490020651",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/12.png?v=1689685550",
        price: 3.12,
        amount: 9,
      },
    },
  },
  132: {
    perDay: 3.5,
    perWeek: 25,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-2?variant=45725477798187",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/11.png?v=1689685483",
        price: 2.92,
        amount: 10,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-2?variant=45725442048299",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/10.png?v=1689685375",
        price: 3.22,
        amount: 9,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-2?variant=45725490020651",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/12.png?v=1689685550",
        price: 3.12,
        amount: 9,
      },
    },
  },
  133: {
    perDay: 4,
    perWeek: 28,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-2?variant=45725477798187",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/11.png?v=1689685483",
        price: 2.92,
        amount: 10,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-2?variant=45725442048299",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/10.png?v=1689685375",
        price: 3.22,
        amount: 9,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-2?variant=45725490020651",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/12.png?v=1689685550",
        price: 3.12,
        amount: 9,
      },
    },
  },

  // DOG Raw bones
  5: {
    perDay: 1,
    perWeek: 7,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-1?variant=45725410099499",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/14_1.png?v=1689838158&width=1100",
        price: 2.92,
        amount: 3,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-1?variant=45725251404075",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/13.png?v=1689685003",
        price: 3.09,
        amount: 2,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-1?variant=45725426319659",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/17.png?v=1689685293",
        price: 2.98,
        amount: 2,
      },
    },
  },
  6: {
    perDay: 1.5,
    perWeek: 11,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-1?variant=45725410099499",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/14_1.png?v=1689838158&width=1100",
        price: 2.92,
        amount: 5,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-1?variant=45725251404075",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/13.png?v=1689685003",
        price: 3.09,
        amount: 5,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-1?variant=45725426319659",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/17.png?v=1689685293",
        price: 2.98,
        amount: 4,
      },
    },
  },
  7: {
    perDay: 2,
    perWeek: 14,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-1?variant=45725410099499",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/14_1.png?v=1689838158&width=1100",
        price: 2.92,
        amount: 7,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-1?variant=45725251404075",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/13.png?v=1689685003",
        price: 3.09,
        amount: 7,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-1?variant=45725426319659",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/17.png?v=1689685293",
        price: 2.98,
        amount: 7,
      },
    },
  },
  8: {
    perDay: 2.5,
    perWeek: 18,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-1?variant=45725410099499",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/14_1.png?v=1689838158&width=1100",
        price: 2.92,
        amount: 10,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-1?variant=45725251404075",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/13.png?v=1689685003",
        price: 3.09,
        amount: 10,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-1?variant=45725426319659",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/17.png?v=1689685293",
        price: 2.98,
        amount: 9,
      },
    },
  },
  134: {
    perDay: 3,
    perWeek: 21,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-1?variant=45725410099499",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/14_1.png?v=1689838158&width=1100",
        price: 2.92,
        amount: 10,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-1?variant=45725251404075",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/13.png?v=1689685003",
        price: 3.09,
        amount: 10,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-1?variant=45725426319659",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/17.png?v=1689685293",
        price: 2.98,
        amount: 9,
      },
    },
  },
  135: {
    perDay: 3.5,
    perWeek: 25,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-1?variant=45725410099499",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/14_1.png?v=1689838158&width=1100",
        price: 2.92,
        amount: 10,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-1?variant=45725251404075",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/13.png?v=1689685003",
        price: 3.09,
        amount: 10,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-1?variant=45725426319659",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/17.png?v=1689685293",
        price: 2.98,
        amount: 9,
      },
    },
  },
  136: {
    perDay: 4,
    perWeek: 28,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-1?variant=45725410099499",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/14_1.png?v=1689838158&width=1100",
        price: 2.92,
        amount: 10,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-1?variant=45725251404075",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/13.png?v=1689685003",
        price: 3.09,
        amount: 10,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-1?variant=45725426319659",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/17.png?v=1689685293",
        price: 2.98,
        amount: 9,
      },
    },
  },

  // DOG Raw boneless
  51: {
    perDay: 1,
    perWeek: 7,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-2?variant=45725477798187",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/11.png?v=1689685483",
        price: 2.92,
        amount: 3,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-2?variant=45725442048299",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/10.png?v=1689685375",
        price: 3.22,
        amount: 2,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-2?variant=45725490020651",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/12.png?v=1689685550",
        price: 3.12,
        amount: 2,
      },
    },
  },
  61: {
    perDay: 2,
    perWeek: 14,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-2?variant=45725477798187",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/11.png?v=1689685483",
        price: 2.92,
        amount: 3,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-2?variant=45725442048299",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/10.png?v=1689685375",
        price: 3.22,
        amount: 2,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-2?variant=45725490020651",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/12.png?v=1689685550",
        price: 3.12,
        amount: 2,
      },
    },
  },
  71: {
    perDay: 3,
    perWeek: 21,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-2?variant=45725477798187",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/11.png?v=1689685483",
        price: 2.92,
        amount: 3,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-2?variant=45725442048299",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/10.png?v=1689685375",
        price: 3.22,
        amount: 2,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-2?variant=45725490020651",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/12.png?v=1689685550",
        price: 3.12,
        amount: 2,
      },
    },
  },
  81: {
    perDay: 4,
    perWeek: 28,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-2?variant=45725477798187",
        title: "Chicken MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/11.png?v=1689685483",
        price: 2.92,
        amount: 3,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-2?variant=45725442048299",
        title: "Beef MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/10.png?v=1689685375",
        price: 3.22,
        amount: 2,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-2?variant=45725490020651",
        title: "Turkey MIX for Dogs",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/12.png?v=1689685550",
        price: 3.12,
        amount: 2,
      },
    },
  },

  // Cat gently food
  9: {
    perDay: 2,
    perWeek: 14,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-cats-80-g-2-8oz-3?variant=45724674523435",
        title: "Chicken MIX for Cats",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/19.png?v=1689684147",
        price: 2.84,
        amount: 5,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-cats-80-g-2-8oz-3?variant=45724667871531",
        title: "Beef MIX for Cats",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/18.png?v=1689684047",
        price: 2.98,
        amount: 5,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-cats-80-g-2-8oz-2?variant=45724689400107",
        title: "Turkey MIX for Cats",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/20.png?v=1689684201",
        price: 2.89,
        amount: 4,
      },
    },
  },
  10: {
    perDay: 3,
    perWeek: 21,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-cats-80-g-2-8oz-3?variant=45724674523435",
        title: "Chicken MIX for Cats",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/19.png?v=1689684147",
        price: 2.84,
        amount: 7,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-cats-80-g-2-8oz-3?variant=45724667871531",
        title: "Beef MIX for Cats",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/18.png?v=1689684047",
        price: 2.98,
        amount: 7,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-cats-80-g-2-8oz-2?variant=45724689400107",
        title: "Turkey MIX for Cats",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/20.png?v=1689684201",
        price: 2.89,
        amount: 7,
      },
    },
  },

  // Cat raw food
  11: {
    perDay: 2,
    perWeek: 14,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-cats-80-g-2-8oz-2?variant=45724168225067",
        title: "Chicken MIX for Cats",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/4.png?v=1689683847",
        price: 2.77,
        amount: 5,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-cats-80-g-2-8oz-1?variant=45724138242347",
        title: "Beef MIX for Cats",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/2.png?v=1689683742",
        price: 2.85,
        amount: 5,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-cats-80-g-2-8oz-1?variant=45724657680683",
        title: "Turkey MIX for Cats",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/7.png?v=1689683952",
        price: 2.83,
        amount: 4,
      },
    },
  },
  12: {
    perDay: 3,
    perWeek: 21,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-cats-80-g-2-8oz-2?variant=45724168225067",
        title: "Chicken MIX for Cats",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/4.png?v=1689683847",
        price: 2.77,
        amount: 7,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-cats-80-g-2-8oz-1?variant=45724138242347",
        title: "Beef MIX for Cats",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/2.png?v=1689683742",
        price: 2.85,
        amount: 7,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-cats-80-g-2-8oz-1?variant=45724657680683",
        title: "Turkey MIX for Cats",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/7.png?v=1689683952",
        price: 2.83,
        amount: 7,
      },
    },
  },

  // Cat raw food (boneless)
  111: {
    perDay: 2,
    perWeek: 14,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-cats-80-g-2-8oz-3?variant=45724674523435",
        title: "Chicken MIX for Cats",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/19.png?v=1689684147",
        price: 2.84,
        amount: 5,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-cats-80-g-2-8oz-3?variant=45724667871531",
        title: "Beef MIX for Cats",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/18.png?v=1689684047",
        price: 2.98,
        amount: 5,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-cats-80-g-2-8oz-2?variant=45724689400107",
        title: "Turkey MIX for Cats",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/20.png?v=1689684201",
        price: 2.89,
        amount: 4,
      },
    },
  },
  121: {
    perDay: 3,
    perWeek: 21,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-cats-80-g-2-8oz-3?variant=45724674523435",
        title: "Chicken MIX for Cats",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/19.png?v=1689684147",
        price: 2.84,
        amount: 5,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-cats-80-g-2-8oz-3?variant=45724667871531",
        title: "Beef MIX for Cats",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/18.png?v=1689684047",
        price: 2.98,
        amount: 5,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-cats-80-g-2-8oz-2?variant=45724689400107",
        title: "Turkey MIX for Cats",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/20.png?v=1689684201",
        price: 2.89,
        amount: 4,
      },
    },
  },
};

export default results;
