const slideMenu = document.getElementById("icon");
const links = document.getElementById("links")
const slideLinks = document.querySelectorAll(".slideMenu ul li");

slideMenu.addEventListener("click", () => {
    document.body.classList.toggle("active");
    links.style.transition = "all 0.3s ease-in"
});
slideLinks.forEach((link) => {
    link.addEventListener("click" , () => {
        document.body.classList.remove("active");
    })
})

