$(document).ready(function() {
  $('.hamburger').click(function(){
      $('body').toggleClass('menu-shown');
  });
});

const slideImage = document.querySelectorAll(".slide-image");
const slideContainer = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

// SET UP THE SLIDER

function init() {
  /*

  slideImage[0] = 0
  slideImage[1] = 100%
  slideImage[2] = 200%
  slideImage[3] = 300%

  */

  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  createNavigationDots();
}

init();

// Create navigation dots

function createNavigationDots() {
   for (let i = 0; i < numberOfImages; i++) {
       const dot = document.createElement("div");
       dot.classList.add("single-dot");
       navigationDots.appendChild(dot)

       dot.addEventListener("click", () => {
         goToSlide(i);
       })
   }

   navigationDots.children[0].classList.add("active");
}

// NEXT BUTTON

nextBtn.addEventListener("click", () => {
  if(currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }
  currentSlide++;
  goToSlide(currentSlide);
});

// PREVIOUS BUTTON

prevBtn.addEventListener("click", () => {
  if(currentSlide <= 0) {
    goToSlide(numberOfImages - 1); 
    return;
  }
  currentSlide--;
  goToSlide(currentSlide);
});

// GO TO SLIDE

function goToSlide(slideNumber) {
  slideContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  setActiveClass();
}

// SET ACTIVE CLASS

function setActiveClass() {
  // set active class for slide image

  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  // set active class for nav dots

  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}