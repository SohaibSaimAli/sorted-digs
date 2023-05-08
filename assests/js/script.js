const btnNavEl = document.querySelector(".button-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  // console.log("click");
  headerEl.classList.toggle("nav-open");
});

//Sticky navigation

const mainEl = document.querySelector("main");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 1.0,
    // rootMargin: "0px",
  }
);
obs.observe(mainEl);
