const collapse = document.querySelector(".nav-list");
const navToggle = document.querySelector(".hamburger");

const NavBar = () => {
  collapse.classList.toggle("active");
};
navToggle.addEventListener("click", NavBar);
