// (async () => {
import tabs from "@src/plugins/tabs";
const tabsEls = document.querySelectorAll("[data-tabs-target]");

if (tabsEls) {
  // const { default: tabs } = await import('');

  tabsEls.forEach((el) => tabs(el));
}
// })();
