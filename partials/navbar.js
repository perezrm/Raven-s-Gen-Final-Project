const navbar = document.querySelector("#navbar");   
const navbarCollapse = document.querySelector(".navbar-collapse");
window.onscroll = () => {
    if (window.scrollY > 25 && window.innerWidth < 768 ){
       navbar.classList.add("nav-active");
    }
    else {
      navbar.classList.remove('nav-active');
      navbarCollapse.classList.remove("show")
  }

};
// make navbar change color when click
navbar.addEventListener("click", () => {
  if (navbar.classList.contains("nav-active") && window.scrollY < 299) {
    navbar.classList.remove("nav-active");
  } else if (!navbar.classList.contains("nav-active") && window.scrollY < 300) {
    navbar.classList.add("nav-active");
  }
})

