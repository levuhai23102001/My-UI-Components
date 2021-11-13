const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//item
const header = $(".header");

//window scroll down sticky nav
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 70);
});
