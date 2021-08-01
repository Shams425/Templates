const slideMenu = document.querySelectorAll(".icon span");
const links = document.getElementById("links");
const slideLinks = document.querySelectorAll(".slideMenu ul li");
const icon = document.getElementById("icon");

slideMenu.forEach((slide) => {
    slide.addEventListener("click", () => {
    document.body.classList.toggle("active");
    links.style.transition = "all 0.3s ease-in"
    });
})

slideLinks.forEach((link) => {
    link.addEventListener("click" , () => {
        document.body.classList.remove("active");
    })
})
window.onclick = (el) => {
    if (!el.target.matches(".slideMenu") && (!el.target.matches(".icon")) && !el.target.matches(".icon span")) {
        document.body.classList.remove("active");
    }
}

