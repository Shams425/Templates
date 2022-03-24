//slide Menu
const icons = document.querySelectorAll(".icons span"); 
const slideMenu = document.querySelector(".icons")
const links = document.getElementById("links");
const mainSub = document.getElementById("mainSub");
const slideSub = document.getElementById("slideSub");
const slideLinks = document.querySelectorAll(".slideMenu li:not(:nth-of-type(2))")

slideMenu.addEventListener("click", () => {
    document.body.classList.toggle("active");
    links.style.transition = `all 0.3s ease-in`;
});

slideLinks.forEach((link) => {
    link.addEventListener("click" , () => {
        document.body.classList.remove("active")
    })
})
slideSub.addEventListener("click" , () => {
    slideSub.classList.toggle("second");
})
mainSub.addEventListener("click" , () => {
    mainSub.classList.toggle("first");
})
window.onclick = (el) => {
  if (!el.target.matches("header") && !el.target.matches(".icons") 
  && !el.target.matches("span") && el.target.matches(".slideMenu li:not(:nth-of-type(2))")){
    document.body.classList.remove("active");
  }
  if (!el.target.matches("#slideSub") && !el.target.matches("#mainSub")) {
    slideSub.classList.remove("second");
    mainSub.classList.remove("first");
  }
}

// show and hide cards
const titles = document.querySelectorAll(".title");
const features = document.querySelectorAll(".feature");
const pictures = document.querySelectorAll(".features-figure");
let picNumer;

titles.forEach((title) => {
  title.addEventListener("click", () => {
      picNumer = title.getAttribute("data-number");
      features.forEach((feature) => {
        feature.classList.remove("active");
      })
      document.querySelector(title.dataset.target).classList.add("active");
      pictures.forEach((picture) => {
        picture.classList.remove("active");
        pictures[picNumer].classList.add("active");
      })
  })
})

//  countDown 
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const days = document.getElementById("days");
let countDown = setInterval(Timecounter , 1000);

function Timecounter ()  {
  let t = Date.parse(new Date().getFullYear() + 1) - Date.parse(new Date());
  seconds.innerHTML = Math.floor((t / 1000) % 60);
  minutes.innerHTML = Math.floor((t / 1000 / 60) % 60);
  hours.innerHTML = Math.floor((t / (1000 * 60 * 60)) % 24);
  days.innerHTML= Math.floor(t / (1000 * 60 * 60 * 24));
}

// moving the cards
const slides = document.getElementById("cardContiner");
const allSlides = document.querySelectorAll(".choose .cards .card");
const slidesLength = allSlides.length;
const slideWidth = allSlides[0].offsetWidth;
let cardIndex = 0;

let index = 0;
let posX1;
let posX2;
let initialPosition;
let finalPosition;
let canISlide = true;
let firstSlide = allSlides[0];
let lastSlide = allSlides[allSlides.length - 1];

slides.addEventListener("transitionend", checkIndex);
slides.addEventListener("mousedown", dragStart);
slides.addEventListener("touchstart", dragStart);
slides.addEventListener("touchmove", dragMove);
slides.addEventListener("touchend", dragEnd);

function dragStart(e) {
  e.preventDefault();
  initialPosition = slides.offsetLeft;
  if (e.type == "touchstart") {
    posX1 = e.touches[0].clientX;
  } else {
    posX1 = e.clientX;
    document.onmouseup = dragEnd;
    document.onmousemove = dragMove;
  }
}

function dragMove(e) {
  if (e.type == "touchmove") {
    posX2 = posX1 - e.touches[0].clientX;
    posX1 = e.touches[0].clientX;
  } else {
    posX2 = posX1 - e.clientX;
    posX1 = e.clientX;
  }
  slides.style.left = `${slides.offsetLeft - posX2}px`;
}
function dragEnd() {
  finalPosition = slides.offsetLeft;
  if (finalPosition - initialPosition < -slideWidth/2) {
    switchSlide("next", "dragging");
  } else if (finalPosition - initialPosition > slideWidth/2) {
    switchSlide("prev", "dragging");
  } else {
    slides.style.left = `${initialPosition}px`;
  }
  document.onmouseup = null;
  document.onmousemove = null;
  console.log(posX1);
  console.log(posX2);
}

function switchSlide(arg, arg2) {
  slides.classList.add("transition");
  for(i = 0; i < allSlides.length; i++) {
    let change = allSlides[i];
    allSlides[i + 1] = allSlides[i];
    allSlides[i] = change;
  }
  if (canISlide) {
    if (!arg2) {
      initialPosition = slides.offsetLeft;
    }
    if (arg == "next") {
      firstSlide = allSlides[0].cloneNode(true);
      // slides.appendChild(allSlides[0]);
    } else {
      slides.style.left = `${initialPosition + slideWidth}px`;
      // firstSlide = allSlides[allSlides.length - 1].cloneNode(true);
      slides.insertBefore(allSlides[1],firstSlide);
    }
  }
  canISlide = false;
}

function checkIndex() {
  slides.classList.remove("transition");
  if (index == -1) {
    slides.style.left = `-${slidesLength * slideWidth}px`;
    index = slidesLength - 1;
  }
  if (index == slidesLength) {
    slides.style.left = `-${1 * slideWidth}px`;
    index = 0;
  }
  canISlide = true;
}
let cardAry = [];
  for(i = 0; i < allSlides.length; i++) {
    cardAry.push(allSlides[i]);
  }
setInterval(() => {
  for(i = 0; i < allSlides.length; i++) {
    let change = cardAry[i];
    cardAry[i + 1] = cardAry[i];
    cardAry[i] = change;
  }
},1000)
console.log(cardAry);

