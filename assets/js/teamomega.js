const collapse = document.querySelector(".nav-list");
const navToggle = document.querySelector(".hamburger");

const NavBar = () => {
  collapse.classList.toggle("active");
};
navToggle.addEventListener("click", NavBar);

// let currentIndex = 2;

// function showSlide(index) {
//   const slides = document.querySelector(".all-box");
//   const totalSlides = document.querySelectorAll(".box").length;

//   if (index < 0) {
//     currentIndex = totalSlides - 1;
//   } else if (index >= totalSlides) {
//     currentIndex = 0;
//   } else {
//     currentIndex = index;
//   }

//   const transformValue = -currentIndex * 100 + "%";
//   slides.style.transform = "translateX(" + transformValue + ")";
// }

// function nextSlide() {
//   showSlide(currentIndex + 1);
// }

// function prevSlide() {
//   showSlide(currentIndex - 1);
// }

// setInterval(nextSlide, 5000);
