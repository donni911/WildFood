// Lazy loading
const loader = document.querySelector(".js-loader");
if (loader) {
  window.addEventListener("load", () => {
    document.documentElement.classList.add("is-loaded");
    loader.classList.add("is-loaded");
  });
}
