import collapse from "@src/plugins/collapse";
// (async () => {
const collapseEls = document.querySelectorAll("[data-collapse-target]");

if (collapseEls) {
  // const { default: collapse } = await import("@src/plugins/collapse");

  collapseEls.forEach((el) => collapse(el));
}
// })();
