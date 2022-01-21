// Hamburgur Navigation Menu
const nav = document.querySelector(".primary-navigation");
const humburgurButton = document.querySelector(".mobile-nav-toggle");

humburgurButton.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    humburgurButton.style.backgroundImage =
      "url(./assets/shared/icon-close.svg)";
    humburgurButton.setAttribute("aria-expanded", true);
    nav.setAttribute("data-visible", true);
    nav.style.transform = "translateX(0)";
  } else {
    humburgurButton.style.backgroundImage =
      "url(./assets/shared/icon-hamburger.svg)";
    humburgurButton.setAttribute("aria-expanded", false);
    nav.setAttribute("data-visible", false);
    nav.style.transform = "translateX(100%)";
  }
});
