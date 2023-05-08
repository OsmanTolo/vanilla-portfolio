const toggleBtn = document.querySelector(".toggle-button")[0];
const navbarLinks = document.querySelector(".nav__links")[0];

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
