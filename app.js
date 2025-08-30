const cta_hamburguer = document.querySelector(".nav__hamburguer");
const nav_links = document.querySelector(".nav__links");
const cta = document.querySelector(".nav__link--cta");

cta_hamburguer.addEventListener("click", (e) => nav_links.classList.toggle("links__activo"));

cta.addEventListener("click", () => console.log("Contacting!!"));

