(async () => {
  const elsCarousel = document.querySelectorAll(".splide");
  if (!elsCarousel.length) {
    return;
  }

  const [{ default: Splide }] = await Promise.all([
    await import("@splidejs/splide"),
  ]);

  elsCarousel.forEach((el) => {
    let splide = new Splide(el, {
      autoWidth: true,
      autoWidth: true,
      updateOnMove: true,
      omitEnd: true,
      focus: 0,
      arrows:el.parentElement.querySelector(".splide__arrows"),

      flickPower: 200,
    });
    splide.mount();
  });
})();
