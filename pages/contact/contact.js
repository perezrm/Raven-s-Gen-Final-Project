const navbar = document.querySelector("#navbar");
const navbarCollapse = document.querySelector(".navbar-collapse");

    navbar.classList.add("nav-background");
 

// make navbar change color when click
navbar.addEventListener("click", () => {
  if (navbar.classList.contains("nav-active") && window.scrollY < 299) {
    navbar.classList.remove("nav-active");
  } else if (!navbar.classList.contains("nav-active") && window.scrollY < 300) {
    navbar.classList.add("nav-active");
  }
});
