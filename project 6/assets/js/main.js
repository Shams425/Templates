$(function () {
  $(".imageSlider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    duration: 3000,
  });

  AOS.init({
    duration: 800,
    anchorPlacement: "center-bottom",
  });
});

document.querySelector("textarea").value = "";
