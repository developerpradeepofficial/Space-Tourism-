const nav = document.queryelectorAll(".primary-navigation  li");
const navToggle = document.querySelector(".mobile-nav-toggle");
console.log(nav);
navToggle.addEventListener("click", (e) => {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }

  for (let navigation of nav) {
    button.classList.remove("active");
  }
  e.target.classList.add("active");
});
