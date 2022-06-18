const wrapper = document.querySelector(".slideWrapper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    console.log("it's wroking");
    wrapper.style.transform = `translateX(${index * -100}vw)`;
    wrapper.style.transition = `all 0.6s ease`;
  });
});
