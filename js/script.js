document.addEventListener("DOMContentLoaded", function () {
  // Cargar el header desde components/header.html
  fetch("components/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;

      // Una vez cargado el header, buscar elementos dentro de él
      const toggleBtn = document.getElementById("menu-toggle");
      const navLinks = document.getElementById("nav-links");

      if (toggleBtn && navLinks) {
        toggleBtn.addEventListener("click", function () {
          navLinks.classList.toggle("show");

          // Cambiar ícono del botón
          toggleBtn.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
        });
      }
    })
    .catch(error => {
      console.error("Error cargando el header:", error);
    });
});