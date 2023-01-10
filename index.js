const navbarToggle = document.querySelector(".active__burguer");
const btnBurguerBars = document.querySelector(".button__burguer");
const onBlurToggleNavbar = document.querySelector(".onBlur");
const cartIconNavbar = document.querySelector(".button__cart");

/* const cartToggle = () => {
  navbarToggle.classList.toggle("active__burguer");
}; */

const navbarToggleBars = () => {
  navbarToggle.classList.toggle("active__burguer");
};
const onBlurToggle = () => {
  onBlurToggleNavbar.classList.toggle("active__blur");
};

const init = () => {
  /*  window.addEventListener("DOMContentLoaded", getCategory); */
  btnBurguerBars.addEventListener("click", navbarToggleBars);
  btnBurguerBars.addEventListener("click", onBlurToggle);
  onBlurToggleNavbar.addEventListener("click", navbarToggleBars);
  onBlurToggleNavbar.addEventListener("click", onBlurToggle);
  document.addEventListener("scroll", navbarToggleBars);
  document.addEventListener("scroll", onBlurToggle);
  /*  cartIconNavbar.addEventListener("click", cartToggle); */
};

init();
