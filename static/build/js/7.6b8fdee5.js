import "./chunks/virtual_svg-icons-register.4276dcc4.js";
const o = Object.assign({
  "./modules/carousel/index.js": () => import("./chunks/index.94fc6631.js"),
  "./modules/collapse/index.js": () => import("./chunks/index.e7ee2840.js"),
  "./modules/gallery/index.js": () => import("./chunks/index.4ed993c7.js"),
  "./modules/header/index.js": () => import("./chunks/index.08da6a3f.js"),
  "./modules/map/index.js": () => import("./chunks/index.f754b9c4.js"),
  "./modules/quiz/index.js": () => import("./chunks/index.d1fea158.js"),
  "./modules/tabs/index.js": () => import("./chunks/index.cb45b5dd.js"),
  "./modules/tooltip/index.js": () => import("./chunks/index.c5687758.js"),
});
console.log(o);
Object.keys(o).forEach((e) => o[e]());