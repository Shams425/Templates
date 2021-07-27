const slideMenu = document.getElementById("icon");
const links = document.getElementById("links")

slideMenu.addEventListener("click", () => {
    document.body.classList.toggle("active");
    links.style.transition = "all 0.3s ease-in"
});

