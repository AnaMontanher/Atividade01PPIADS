const loginLink = document.getElementById("loginLink");
const login = document.getElementById("iconLogin");
const logout = document.getElementById("iconLogout");

loginLink.addEventListener("mouseenter", () => {
  login.src = "../assets/login2.png";
  login.style.transition = "all 500ms ease-in-out;";
});

loginLink.addEventListener("mouseleave", () => {
  login.src = "../assets/login.png";
});

loginLink.addEventListener("mouseenter", () => {
  
  logout.src = "../assets/logout2.png";
  logout.style.transition = "all 500ms ease-in-out;";
});

loginLink.addEventListener("mouseleave", () => {
  logout.src = "../assets/logout.png";
});
