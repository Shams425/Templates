$(function () {
  $(".commentsContainer").owlCarousel({
    loop: true,
    center: true,
    autoPlay: true,
    autoplayHoverPause: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      770: {
        items: 2,
      },
    },
  });

  AOS.init({
    duration: 800,
    anchorPlacement: "center-bottom",
  });
});

//show and hide text in about section
const titles = document.querySelectorAll("#history .bottom .titles .title");
const texts = document.querySelectorAll("#history .bottom .info");

titles.forEach((title) => {
  title.addEventListener("click", function (e) {
    titles.forEach((title) => {
      title.classList.remove("active");
    });
    this.classList.add("active");
    texts.forEach((text) => {
      text.classList.remove("show");
    });
    document.querySelector(title.dataset.target).classList.add("show");
  });
});
