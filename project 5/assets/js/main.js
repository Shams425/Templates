//AOS animation library
$(function () {
  AOS.init({
    duration: 800,
    anchorPlacement: "center-bottom",
  });
});

//comments in testimonial section
const comments = document.querySelectorAll(".comment");
const names = document.querySelectorAll(".name");
const jobs = document.querySelectorAll(".jobTitle");
const dispName = document.querySelector(".showName");
const dispPosition = document.querySelector(".showPosition");
let index;

comments.forEach((comment) => {
  comment.addEventListener("click", function (el) {
    comments.forEach((comm) => {
      comm.classList.remove("active");
    });
    this.classList.add("active");
    index = this.getAttribute("data-number");
    dispName.innerHTML = names[index].innerHTML;
    dispPosition.innerHTML = jobs[index].innerHTML;
  });
});
