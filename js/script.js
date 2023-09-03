// Toggle Menu
const menuIcon = document.querySelector(".toggle-menu");
const nav = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () => {
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.replace("fa-bars", "fa-xmark");
    nav.classList.add("active");
  } else {
    menuIcon.classList.replace("fa-xmark", "fa-bars");
    nav.classList.remove("active");
  }
});
