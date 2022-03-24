//owl carousel
$(".cards").owlCarousel({
  items: 5,
  loop: true,
  dots: true,
  nav: true,
  autoplay: true,
  margin: 30,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

//img Slider
const imgContainer = document.querySelector("#landing .images");
const images = document.querySelectorAll("#landing .images img");
const slideLeft = document.querySelector("#landing #slideLeft");
const slideRight = document.querySelector("#landing #slideRight");

let index = 1;
let imgWidth = images[0].clientWidth;

imgContainer.style.transform = `translateX(${-imgWidth * index}px)`;

console.log(typeof imgContainer.children.length);

const autoMove = setInterval(autoSlide, 5000);

function autoSlide() {
  if (index >= imgContainer.children.length - 1) return;
  index++;
  console.log(index);
  imgContainer.style.transform = `translateX(${-imgWidth * index}px)`;
  imgContainer.style.transition = `all 0.7s ease-in`;
}

slideLeft.addEventListener("click", () => {
  clearInterval(autoMove);
  if (index <= 0) return;
  index--;
  console.log(index);
  imgContainer.style.transform = `translateX(${-imgWidth * index}px)`;
  imgContainer.style.transition = `all 0.7s ease-in`;
});

slideRight.addEventListener("click", () => {
  clearInterval(autoMove);
  if (index >= imgContainer.children.length - 1) return;
  index++;
  console.log(index);
  imgContainer.style.transform = `translateX(${-imgWidth * index}px)`;
  imgContainer.style.transition = `all 0.7s ease-in`;
});

imgContainer.addEventListener("transitionend", () => {
  if (images[index].id === "first") {
    imgContainer.style.transition = `null`;
    index = images.length - index;
    imgContainer.style.transform = `translateX(${-imgWidth * index}px)`;
  }
  if (images[index].id === "last") {
    imgContainer.style.transition = `null`;
    index = images.length - 2;
    imgContainer.style.transform = `translateX(${-imgWidth * index}px)`;
  }
});

//show and hide offer menu options
const mealButtons = document.querySelectorAll("#offer .heading button");
const mealOptions = document.querySelectorAll(
  "#offer .offerContainer .mealDetalies"
);

mealButtons.forEach((button) => {
  button.addEventListener("click", function () {
    mealButtons.forEach((button) => {
      button.classList.remove("active");
    });
    this.classList.add("active");
    mealOptions.forEach((meal) => {
      meal.classList.remove("active");
    });
    document.querySelector(this.dataset.target).classList.add("active");
  });
});

document.querySelector("textarea").value = "";
