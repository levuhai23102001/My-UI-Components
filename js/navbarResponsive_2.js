const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const toggle = $(".menu-toggle");
const menu = $(".header-menu");
const item = $$(".menu-item");

//menu-toggle
toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

//active item
for (let i = 0; i < item.length; i++) {
  item[i].onclick = () => {
    let j = 0;
    while (j < item.length) {
      item[j++].className = "menu-item";
    }
    item[i].className = "menu-item active";
  };
}
