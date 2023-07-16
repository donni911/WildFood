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
    chicken: {
      url: "https://9e168f-2.myshopify.com/products/chicken-mix-for-dogs-120g-4-2oz-2",
      title: "Chicken MIX for Dogs",
      imgUrl:
        "https://9e168f-2.myshopify.com/cdn/shop/files/Chickenmixgentlycooked.png?v=1689006237",
      amount: 3,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=8d1f761a43128a3cc31ff30e188dc53e",
      title: "Beef MIX for Dogs",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmixgentlycooked.png?v=1689006086",
      amount: 2,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=6b820282c18207ad7e82ce4816c8b370",
      title: "Turkey MIX for Dogs",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Turkeymixgentlycooked.png?v=1689006296",
      amount: 2,
    },
  },
  2: {
    chicken: {
      url: "https://9e168f-2.myshopify.com/products/chicken-mix-for-dogs-120g-4-2oz-2",
      title: "Chicken MIX for Dogs",
      imgUrl:
        "https://9e168f-2.myshopify.com/cdn/shop/files/Chickenmixgentlycooked.png?v=1689006237",
      amount: 5,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=8d1f761a43128a3cc31ff30e188dc53e",
      title: "Beef MIX for Dogs",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmixgentlycooked.png?v=1689006086",
      amount: 5,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=6b820282c18207ad7e82ce4816c8b370",
      title: "Turkey MIX for Dogs",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Turkeymixgentlycooked.png?v=1689006296",
      amount: 4,
    },
  },
  3: {
    chicken: {
      url: "https://9e168f-2.myshopify.com/products/chicken-mix-for-dogs-120g-4-2oz-2",
      title: "Chicken MIX for Dogs",
      imgUrl:
        "https://9e168f-2.myshopify.com/cdn/shop/files/Chickenmixgentlycooked.png?v=1689006237",
      amount: 7,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=8d1f761a43128a3cc31ff30e188dc53e",
      title: "Beef MIX for Dogs",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmixgentlycooked.png?v=1689006086",
      amount: 7,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=6b820282c18207ad7e82ce4816c8b370",
      title: "Turkey MIX for Dogs",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Turkeymixgentlycooked.png?v=1689006296",
      amount: 7,
    },
  },
  4: {
    chicken: {
      url: "https://9e168f-2.myshopify.com/products/chicken-mix-for-dogs-120g-4-2oz-2",
      title: "Chicken MIX for Dogs",
      imgUrl:
        "https://9e168f-2.myshopify.com/cdn/shop/files/Chickenmixgentlycooked.png?v=1689006237",
      amount: 10,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=8d1f761a43128a3cc31ff30e188dc53e",
      title: "Beef MIX for Dogs",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmixgentlycooked.png?v=1689006086",
      amount: 9,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=6b820282c18207ad7e82ce4816c8b370",
      title: "Turkey MIX for Dogs",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Turkeymixgentlycooked.png?v=1689006296",
      amount: 9,
    },
  },

  // DOG Raw bones
  5: {
    chicken: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=1e42ea454bca8518ca03d48e4dd69e53",
      title: "Chicken MIX for Dogs (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Chickenmix.png?v=1689005951",
      amount: 3,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=7872e944f4be3166919688c28a9e06d1",
      title: "Beef MIX for Dogs (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmix_93982c85-47f5-484d-8736-0f9b48d829fb.png?v=1689005394",
      amount: 2,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=7f777d8d189b2431ae7ae470f159b377",
      title: "Turkey MIX for Dogs (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/turkeymix.png?v=1689006022",
      amount: 2,
    },
  },
  6: {
    chicken: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=1e42ea454bca8518ca03d48e4dd69e53",
      title: "Chicken MIX for Dogs (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Chickenmix.png?v=1689005951",
      amount: 5,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=7872e944f4be3166919688c28a9e06d1",
      title: "Beef MIX for Dogs (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmix_93982c85-47f5-484d-8736-0f9b48d829fb.png?v=1689005394",
      amount: 5,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=7f777d8d189b2431ae7ae470f159b377",
      title: "Turkey MIX for Dogs (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/turkeymix.png?v=1689006022",
      amount: 4,
    },
  },
  7: {
    chicken: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=1e42ea454bca8518ca03d48e4dd69e53",
      title: "Chicken MIX for Dogs (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Chickenmix.png?v=1689005951",
      amount: 7,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=7872e944f4be3166919688c28a9e06d1",
      title: "Beef MIX for Dogs (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmix_93982c85-47f5-484d-8736-0f9b48d829fb.png?v=1689005394",
      amount: 7,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=7f777d8d189b2431ae7ae470f159b377",
      title: "Turkey MIX for Dogs (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/turkeymix.png?v=1689006022",
      amount: 7,
    },
  },
  8: {
    chicken: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=1e42ea454bca8518ca03d48e4dd69e53",
      title: "Chicken MIX for Dogs (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Chickenmix.png?v=1689005951",
      amount: 10,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=7872e944f4be3166919688c28a9e06d1",
      title: "Beef MIX for Dogs (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmix_93982c85-47f5-484d-8736-0f9b48d829fb.png?v=1689005394",
      amount: 10,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=7f777d8d189b2431ae7ae470f159b377",
      title: "Turkey MIX for Dogs (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/turkeymix.png?v=1689006022",
      amount: 9,
    },
  },

  51: {
    chicken: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=bbbdc4165be84dde1801742188769e2f",
      title: "Chicken MIX for Dogs (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Chickenmixboneless_27a053c1-1ccc-4867-a46f-e8570da613d2.png?v=1689005010",
      amount: 3,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=1aea0e39483e29603d805f299d197976",
      title: "Beef MIX for Dogs (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmixboneless_1.png?v=1689004898",
      amount: 2,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=3b3f239c6fed14e0905c444011ccf062",
      title: "Turkey MIX for Dogs (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Turkeymixboneless.png?v=1689005345",
      amount: 2,
    },
  },
  61: {
    chicken: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=bbbdc4165be84dde1801742188769e2f",
      title: "Chicken MIX for Dogs (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Chickenmixboneless_27a053c1-1ccc-4867-a46f-e8570da613d2.png?v=1689005010",
      amount: 5,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=1aea0e39483e29603d805f299d197976",
      title: "Beef MIX for Dogs (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmixboneless_1.png?v=1689004898",
      amount: 5,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=3b3f239c6fed14e0905c444011ccf062",
      title: "Turkey MIX for Dogs (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Turkeymixboneless.png?v=1689005345",
      amount: 4,
    },
  },
  71: {
    chicken: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=bbbdc4165be84dde1801742188769e2f",
      title: "Chicken MIX for Dogs (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Chickenmixboneless_27a053c1-1ccc-4867-a46f-e8570da613d2.png?v=1689005010",
      amount: 7,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=1aea0e39483e29603d805f299d197976",
      title: "Beef MIX for Dogs (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmixboneless_1.png?v=1689004898",
      amount: 7,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=3b3f239c6fed14e0905c444011ccf062",
      title: "Turkey MIX for Dogs (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Turkeymixboneless.png?v=1689005345",
      amount: 7,
    },
  },
  81: {
    chicken: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=bbbdc4165be84dde1801742188769e2f",
      title: "Chicken MIX for Dogs (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Chickenmixboneless_27a053c1-1ccc-4867-a46f-e8570da613d2.png?v=1689005010",
      amount: 10,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=1aea0e39483e29603d805f299d197976",
      title: "Beef MIX for Dogs (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmixboneless_1.png?v=1689004898",
      amount: 10,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=3b3f239c6fed14e0905c444011ccf062",
      title: "Turkey MIX for Dogs (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Turkeymixboneless.png?v=1689005345",
      amount: 9,
    },
  },

  // Cat gently food
  9: {
    chicken: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=173a6bdaaa178b6f41f10f4b0200063e",
      title: "Chicken MIX for Cats",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Chickenmixgentlycooked_1.png?v=1688998052",
      amount: 5,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=6b895b9cf5c5dfde7d32a1eadc9139ed",
      title: "Beef MIX for Cats",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmixgentlycooked_1.png?v=1688997972",
      amount: 5,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=17d97c11d3a44018abf9d945a28662df",
      title: "Turkey MIX for Cats",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Turkeymixgentlycooked_1.png?v=1688998604",
      amount: 4,
    },
  },
  10: {
    chicken: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=173a6bdaaa178b6f41f10f4b0200063e",
      title: "Chicken MIX for Cats",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Chickenmixgentlycooked_1.png?v=1688998052",
      amount: 7,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=6b895b9cf5c5dfde7d32a1eadc9139ed",
      title: "Beef MIX for Cats",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmixgentlycooked_1.png?v=1688997972",
      amount: 7,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=17d97c11d3a44018abf9d945a28662df",
      title: "Turkey MIX for Cats",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Turkeymixgentlycooked_1.png?v=1688998604",
      amount: 7,
    },
  },

  // Cat raw food (bones)
  11: {
    chicken: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=e82ab07021c39fceabd41aae1455234b",
      title: "Chicken MIX for Cats (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Chickenmix_1.png?v=1688994085",
      amount: 5,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=1f4eb07b7463e53376759edfd3c0f9a4",
      title: "Beef MIX for Cats (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmix_1.png?v=1688993944",
      amount: 5,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=7b298d7272b879740389cb9955a5c9dc",
      title: "Turkey MIX for Cats (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/turkeymix_1.png?v=1688997866",
      amount: 4,
    },
  },
  12: {
    chicken: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=e82ab07021c39fceabd41aae1455234b",
      title: "Chicken MIX for Cats (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Chickenmix_1.png?v=1688994085",
      amount: 7,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=1f4eb07b7463e53376759edfd3c0f9a4",
      title: "Beef MIX for Cats (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmix_1.png?v=1688993944",
      amount: 7,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=7b298d7272b879740389cb9955a5c9dc",
      title: "Turkey MIX for Cats (bones)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/turkeymix_1.png?v=1688997866",
      amount: 7,
    },
  },

  // Cat raw food (boneless)
  111: {
    chicken: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=abbbf926ed3d566a408f7c3d89652a06",
      title: "Chicken MIX for Cats (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Chickenmixboneless_1.png?v=1688991700",
      amount: 5,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=e636818a1fe1b8ac37448c754287b9a9",
      title: "Beef MIX for Cats (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmixboneless-1_1.png?v=1688997547",
      amount: 5,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=8becebefa68e3212c56680d6acd935bb",
      title: "Turkey MIX for Cats (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Turkeymixboneless_1.png?v=1688991939",
      amount: 4,
    },
  },
  121: {
    chicken: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=abbbf926ed3d566a408f7c3d89652a06",
      title: "Chicken MIX for Cats (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Chickenmixboneless_1.png?v=1688991700",
      amount: 5,
    },
    beef: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=e636818a1fe1b8ac37448c754287b9a9",
      title: "Beef MIX for Cats (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Beefmixboneless-1_1.png?v=1688997547",
      amount: 5,
    },
    turkey: {
      url: "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/products_preview?preview_key=8becebefa68e3212c56680d6acd935bb",
      title: "Turkey MIX for Cats (boneless)",
      imgUrl:
        "https://9to8e4nyc9q90iiy-77263962411.shopifypreview.com/cdn/shop/files/Turkeymixboneless_1.png?v=1688991939",
      amount: 4,
    },
  },
};

export default results;
