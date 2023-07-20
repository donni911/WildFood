const results = {
  DOG: {
    moreThanOne: {
      kibble: [
        {
          range: "<=10",
          result: 1,
        },
        {
          range: "11-18",
          result: 2,
        },
        {
          range: "19-29",
          result: 3,
        },
        {
          range: ">=30",
          result: 4,
        },
      ],
      raw: [
        {
          range: "<=10",
          result: 5,
        },
        {
          range: "11-18",
          result: 6,
        },
        {
          range: "19-29",
          result: 7,
        },
        {
          range: ">=30",
          result: 8,
        },
      ],
      fresh: [
        {
          range: "<=10",
          result: 51,
        },
        {
          range: "11-18",
          result: 61,
        },
        {
          range: "19-29",
          result: 71,
        },
        {
          range: ">=30",
          result: 81,
        },
      ],
    },
    lessThanOne: {
      kibble: [
        {
          range: "<=5",
          result: 2,
        },
        {
          range: "6-9",
          result: 3,
        },
        {
          range: ">=10",
          result: 4,
        },
      ],
      raw: [
        {
          range: "<=5",
          result: 6,
        },
        {
          range: "6-9",
          result: 7,
        },
        {
          range: ">=10",
          result: 8,
        },
      ],
      fresh: [
        {
          range: "<=5",
          result: 61,
        },
        {
          range: "6-9",
          result: 71,
        },
        {
          range: ">=10",
          result: 81,
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
    perDay: 3,
    perWeek: 21,
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
        title: "Chicken MIX for Dogs (bones)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/14_1.png?v=1689838158&width=1100",
        price: 2.92,
        amount: 3,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-1?variant=45725251404075",
        title: "Beef MIX for Dogs (bones)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/13.png?v=1689685003",
        price: 3.09,
        amount: 2,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-1?variant=45725426319659",
        title: "Turkey MIX for Dogs (bones)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/17.png?v=1689685293",
        price: 2.98,
        amount: 2,
      },
    },
  },
  6: {
    perDay: 2,
    perWeek: 14,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-1?variant=45725410099499",
        title: "Chicken MIX for Dogs (bones)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/14_1.png?v=1689838158&width=1100",
        price: 2.92,
        amount: 5,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-1?variant=45725251404075",
        title: "Beef MIX for Dogs (bones)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/13.png?v=1689685003",
        price: 3.09,
        amount: 5,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-1?variant=45725426319659",
        title: "Turkey MIX for Dogs (bones)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/17.png?v=1689685293",
        price: 2.98,
        amount: 4,
      },
    },
  },
  7: {
    perDay: 3,
    perWeek: 21,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-1?variant=45725410099499",
        title: "Chicken MIX for Dogs (bones)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/14_1.png?v=1689838158&width=1100",
        price: 2.92,
        amount: 7,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-1?variant=45725251404075",
        title: "Beef MIX for Dogs (bones)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/13.png?v=1689685003",
        price: 3.09,
        amount: 7,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-1?variant=45725426319659",
        title: "Turkey MIX for Dogs (bones)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/17.png?v=1689685293",
        price: 2.98,
        amount: 7,
      },
    },
  },
  8: {
    perDay: 4,
    perWeek: 28,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz-1?variant=45725410099499",
        title: "Chicken MIX for Dogs (bones)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/14_1.png?v=1689838158&width=1100",
        price: 2.92,
        amount: 10,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz-1?variant=45725251404075",
        title: "Beef MIX for Dogs (bones)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/13.png?v=1689685003",
        price: 3.09,
        amount: 10,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz-1?variant=45725426319659",
        title: "Turkey MIX for Dogs (bones)",
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
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz?variant=45725190029611",
        title: "Chicken MIX for Dogs (boneless)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/8.png?v=1689684397",
        price: 2.97,
        amount: 3,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz?variant=45725184098603",
        title: "Beef MIX for Dogs (boneless)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/9.png?v=1689684305",
        price: 3.18,
        amount: 2,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz?variant=45725233316139",
        title: "Turkey MIX for Dogs (boneless)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/16.png?v=1689684459",
        price: 3.08,
        amount: 2,
      },
    },
  },
  61: {
    perDay: 2,
    perWeek: 14,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz?variant=45725190029611",
        title: "Chicken MIX for Dogs (boneless)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/8.png?v=1689684397",
        price: 2.97,
        amount: 5,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz?variant=45725184098603",
        title: "Beef MIX for Dogs (boneless)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/9.png?v=1689684305",
        price: 3.18,
        amount: 5,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz?variant=45725233316139",
        title: "Turkey MIX for Dogs (boneless)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/16.png?v=1689684459",
        price: 3.08,
        amount: 4,
      },
    },
  },
  71: {
    perDay: 3,
    perWeek: 21,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz?variant=45725190029611",
        title: "Chicken MIX for Dogs (boneless)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/8.png?v=1689684397",
        price: 2.97,
        amount: 7,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz?variant=45725184098603",
        title: "Beef MIX for Dogs (boneless)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/9.png?v=1689684305",
        price: 3.18,
        amount: 7,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz?variant=45725233316139",
        title: "Turkey MIX for Dogs (boneless)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/16.png?v=1689684459",
        price: 3.08,
        amount: 7,
      },
    },
  },
  81: {
    perDay: 4,
    perWeek: 28,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-dogs-120g-4-2oz?variant=45725190029611",
        title: "Chicken MIX for Dogs (boneless)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/8.png?v=1689684397",
        price: 2.97,
        amount: 10,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-dogs-120g-4-2oz?variant=45725184098603",
        title: "Beef MIX for Dogs (boneless)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/9.png?v=1689684305",
        price: 3.18,
        amount: 10,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-dogs-120g-4-2oz?variant=45725233316139",
        title: "Turkey MIX for Dogs (boneless)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/16.png?v=1689684459",
        price: 3.08,
        amount: 9,
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

  // Cat raw food (bones)
  11: {
    perDay: 2,
    perWeek: 14,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-cats-80-g-2-8oz-2?variant=45724168225067",
        title: "Chicken MIX for Cats (bones)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/4.png?v=1689683847",
        price: 2.77,
        amount: 5,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-cats-80-g-2-8oz-1?variant=45724138242347",
        title: "Beef MIX for Cats (bones)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/2.png?v=1689683742",
        price: 2.85,
        amount: 5,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-cats-80-g-2-8oz-1?variant=45724657680683",
        title: "Turkey MIX for Cats (bones)",
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
        title: "Chicken MIX for Cats (bones)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/4.png?v=1689683847",
        price: 2.77,
        amount: 7,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-cats-80-g-2-8oz-1?variant=45724138242347",
        title: "Beef MIX for Cats (bones)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/2.png?v=1689683742",
        price: 2.85,
        amount: 7,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-cats-80-g-2-8oz-1?variant=45724657680683",
        title: "Turkey MIX for Cats (bones)",
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
        url: "https://wildfoodforpets.com/products/chicken-mix-for-cats-80-g-2-8oz-1?variant=45723937898795",
        title: "Chicken MIX for Cats (boneless)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/3.png?v=1689683479",
        price: 2.8,
        amount: 5,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-cats-80-g-2-8oz-2?variant=45724632285483",
        title: "Beef MIX for Cats (boneless)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/1_540e9caa-b6bb-42b4-9a62-19c5a7c97619.png?v=1689683036",
        price: 2.93,
        amount: 5,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-cats-80-g-2-8oz?variant=45723951202603",
        title: "Turkey MIX for Cats (boneless)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/6.png?v=1689683613",
        price: 2.83,
        amount: 4,
      },
    },
  },
  121: {
    perDay: 3,
    perWeek: 21,
    ration: {
      chicken: {
        url: "https://wildfoodforpets.com/products/chicken-mix-for-cats-80-g-2-8oz-1?variant=45723937898795",
        title: "Chicken MIX for Cats (boneless)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/3.png?v=1689683479",
        price: 2.8,
        amount: 5,
      },
      beef: {
        url: "https://wildfoodforpets.com/products/beef-mix-for-cats-80-g-2-8oz-2?variant=45724632285483",
        title: "Beef MIX for Cats (boneless)",
        imgUrl:
          "https://wildfoodforpets.com/cdn/shop/files/1_540e9caa-b6bb-42b4-9a62-19c5a7c97619.png?v=1689683036",
        price: 2.93,
        amount: 5,
      },
      turkey: {
        url: "https://wildfoodforpets.com/products/turkey-mix-for-cats-80-g-2-8oz?variant=45723951202603",
        title: "Turkey MIX for Cats (boneless)",
        imgUrl: "https://wildfoodforpets.com/cdn/shop/files/6.png?v=1689683613",
        price: 2.83,
        amount: 4,
      },
    },
  },
};

export default results;
