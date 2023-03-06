const elementList = document.querySelectorAll(".blog .news-container .news");
const mediaQuery = window.matchMedia("(min-width: 640px)");
const pagination = document.querySelectorAll(".circle");
const featureArticles = document.querySelectorAll(".featured");
const contents = document.querySelectorAll(".media-content");
const hamburger = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close");

//Mobile menu

hamburger.addEventListener("click", () => {
  mobileNav.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  mobileNav.style.display = "none";
});

//Accordions on media page

var heading = document.getElementsByClassName("heading");
let i;

for (i = 0; i < heading.length; i++) {
  heading[i].addEventListener("click", function () {
    this.classList.toggle("open");
    let contents = this.nextElementSibling;
    if (contents.style.display === "grid") {
      contents.style.display = "none";
    } else {
      contents.style.display = "grid";
    }
  });
}

//Slider//

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  if (n > featureArticles.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = featureArticles.length;
  }
  for (i = 0; i < featureArticles.length; i++) {
    featureArticles[i].style.display = "none";
  }
  for (i = 0; i < pagination.length; i++) {
    pagination[i].className = pagination[i].className.replace(" active", "");
  }
  featureArticles[slideIndex - 1].style.display = "block";
  pagination[slideIndex - 1].className += " active";
}

window.setInterval(function () {
  plusSlides(1);
}, 7000);

window.clearInterval(function () {
  plusSlides(1);
}, 7000);

//Load More Button//

if (mediaQuery.matches) {
  let currentItems = 6;

  loadmore.addEventListener("click", (e) => {
    for (let i = currentItems; i < currentItems + 3; i++) {
      if (elementList[i]) {
        elementList[i].style.display = "block";
      }
    }
    currentItems += 3;
    // Load more button will be hidden after list fully loaded
    if (currentItems >= elementList.length) {
      event.target.style.display = "none";
    }
  });
} else {
  let currentItems = 6;
  loadmore.addEventListener("click", (e) => {
    for (let i = currentItems; i < currentItems + 2; i++) {
      if (elementList[i]) {
        elementList[i].style.display = "block";
      }
    }
    currentItems += 2;
    // Load more button will be hidden after list fully loaded
    if (currentItems >= elementList.length) {
      event.target.style.display = "none";
    }
  });
}
