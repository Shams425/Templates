$(function () {
  $("#cards").owlCarousel({
    loop: true,
    center: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  AOS.init({
    disable: "mobile",
    duration: 800,
    anchorPlacement: "center-bottom",
  });
});

// to make the placeholder visible
document.querySelector("textarea").value = "";
