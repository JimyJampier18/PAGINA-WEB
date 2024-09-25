const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const loginBtn = document.getElementById("login-btn");
const loginForm = document.getElementById("login-form");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

loginBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Evita la recarga de la página
    loginForm.classList.toggle("hidden"); // Muestra/oculta el formulario
    fillLoginForm();
});

function fillLoginForm() {
    document.getElementById("username").value = "usuario@example.com"; // Cambia a tus datos
    document.getElementById("password").value = "contraseña123"; // Cambia a tus datos
}

document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita la recarga de la página
    document.getElementById("login-form").classList.remove("hidden"); // Muestra el formulario de login
});

document.getElementById("home-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita la recarga de la página
    document.getElementById("login-form").classList.add("hidden"); // Oculta el formulario de login
});
