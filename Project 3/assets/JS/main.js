//image Slider

const cardsContainer = document.querySelectorAll(".slideContainer");
const sectionContainer = document.querySelector("#services .container");
const Cards = document.querySelectorAll("#services .slideContainer .slideCard");

const leftButtons = document.querySelectorAll(".slideLeft");
const rightButtons = document.querySelectorAll(".slideRight");

let index = 1;
let cardWidth = Cards[0].clientWidth;

cardsContainer.forEach((container) => {
  container.style.transform = `translateX(${-cardWidth * index}px)`;
});

const autoSlide = setInterval(slide, 1000);

function slide() {
  index++;
  cardsContainer.forEach((container) => {
    container.style.transform = `translateX(${-cardWidth * index}px)`;
    container.style.transition = `all 0.3s ease`;
  });
  console.log(index);
}

cardsContainer.forEach((container) => {
  container.addEventListener("transitionend", () => {
    if (Cards[index].id === "first") {
      index = Cards.length - index;
      cardsContainer.forEach((container) => {
        container.style.transition = `null`;
        container.style.transform = `translateX(${-cardWidth * index}px)`;
      });
    }
    if (Cards[index].id === "last") {
      index = Cards.length - 2;
      cardsContainer.forEach((container) => {
        container.style.transition = `null`;
        container.style.transform = `translateX(${-cardWidth * index}px)`;
      });
    }
  });
});

leftButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (index < 0) return;
    index--;
    cardsContainer.forEach((container) => {
      container.style.transform = `translateX(${-cardWidth * index}px)`;
      container.style.transition = `all 0.3s ease`;
    });
    clearInterval(autoSlide);
    setInterval(slide, 1000);
  });
});

rightButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (index > Cards.length - 1) return;
    index++;
    cardsContainer.forEach((container) => {
      container.style.transform = `translateX(${-cardWidth * index}px)`;
      container.style.transition = `all 0.3s ease`;
    });
    clearInterval(autoSlide);
    setInterval(slide, 1000);
  });
});

//Gallery filter
const filterButtons = document.querySelectorAll(
  "#gallery .filterButtons button"
);
const filterCards = document.querySelectorAll("#gallery .filteredCards .card");
console.log(filterCards);

filterButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const filterName = this.innerHTML;
    console.log(filterName);
    filterCards.forEach(function (card) {
      card.classList.remove("show");
      card.classList.remove("hide");
      if (
        card.getAttribute("data-filter") === filterName ||
        filterName === "ALL MEETINGS"
      ) {
        card.classList.add("show");
        card.classList.remove("hide");
      } else {
        card.classList.remove("show");
        card.classList.add("hide");
      }
    });
  });
});
