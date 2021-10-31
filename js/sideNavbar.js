//config
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//item
const menuBtn = $(".menu-btn");
const sideNav = $(".sideNav");
const menuItems = $$(".navbar-list-item");

// click active sideBar
menuBtn.onclick = () => {
  sideNav.classList.toggle("active");
};

// active items
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].onclick = () => {
    let j = 0;

    while (j < menuItems.length) {
      menuItems[j++].className = "navbar-list-item";
    }
    menuItems[i].className = "navbar-list-item active";
  };
}
