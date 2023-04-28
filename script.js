const header = document.querySelector(".header");
const mobileBtn = document.querySelector(".btn-mobile-nav");

mobileBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
