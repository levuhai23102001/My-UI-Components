//config
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//item
const menuBtn = $(".menu-btn");
const sideNav = $(".sideNav");
const menuItems = $$(".navbar-list-item");
const body = $("body");

//active sideNav
menuBtn.onclick = () => {
  sideNav.classList.toggle("active");
};

//active item
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].onclick = () => {
    let j = 0;
    while (j < menuItems.length) {
      menuItems[j++].className = "navbar-list-item";
    }
    menuItems[i].className = "navbar-list-item active";
  };
}

//dark mode
const darkModeBtn = document.querySelector("#dark-light");

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("darkMode");
  if (darkModeBtn.classList.contains("bxs-moon")) {
    darkModeBtn.classList.remove("bxs-moon");
    darkModeBtn.classList.add("bxs-brightness");
  } else {
    darkModeBtn.classList.remove("bxs-brightness");
    darkModeBtn.classList.add("bxs-moon");
  }
});
