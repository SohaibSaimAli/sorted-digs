const btnNavEl = document.querySelector(".button-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  // console.log("click");
  headerEl.classList.toggle("nav-open");
});
