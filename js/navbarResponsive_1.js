const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const toggle = $(".menu-toggle");
const menu = $(".header-menu");

//menu-toggle
toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// event click outside
window.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove("show");
  }
});
