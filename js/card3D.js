// Hover movement animation
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const card = $(".container .card");
const container = $(".container");
// items
const title = $(".card-body .card-title");
const img = $(".card-top img");
const desc = $(".card-body .card-decs");
const size = $(".card-body .size");
const btn = $(".card-body .btn");

//Moving animation event
card.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 6;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
card.addEventListener("mouseenter", (e) => {
  card.style.transition = `all 0.2s ease`;
  // card.style.transform = "none";
  //popup
  title.style.transform = `translateZ(150px)`;
});

//animate out
card.addEventListener("mouseleave", (e) => {
  card.style.transition = `all 0.5s ease`;
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //popback
  title.style.transform = `translateZ(0px)`;
});
