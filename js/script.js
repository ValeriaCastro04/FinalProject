document.addEventListener("DOMContentLoaded", function () {
  // Detectar ruta base desde el atributo data-base
  const scriptTag = document.currentScript || document.querySelector('script[src*="script.js"]');
  const basePath = scriptTag.dataset.base || "";

  // Cargar HEADER
  fetch(`${basePath}components/header.html`)
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;

      const toggleBtn = document.getElementById("menu-toggle");
      const navLinks = document.getElementById("nav-links");

      if (toggleBtn && navLinks) {
        toggleBtn.addEventListener("click", function () {
          navLinks.classList.toggle("show");
          toggleBtn.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
        });
      }
    })
    .catch(error => console.error("Error loading header:", error));

  // Cargar FOOTER
  fetch(`${basePath}components/footer.html`)
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));

  // Tip del día aleatorio
  const tips = [
    "Haz amigos en tu carrera, te van a salvar en todos los sentidos, en parciales, tareas, la vida.",
    "No te duermas en las primeras clases... ahí dan las claves del ciclo.",
    "Ten un calendario visible, el tiempo vuela en la U.",
    "Pregunta aunque creas que es obvio. Más vale una duda tonta que un error grande.",
    "Aprovecha los servicios gratis: tutorías, biblioteca, consejería.",
    "Nunca subestimes el poder del café y una buena playlist para estudiar.",
    "Guarda todo en la nube. Siempre. Por si acaso.",
  ];

  const tipTexto = document.getElementById("tip-texto");
  if (tipTexto) {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipTexto.textContent = randomTip;
  }

  // Slideshow automático + manual
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  }

  if (slides.length > 0) {
    showSlide(slideIndex);
    setInterval(nextSlide, 5000);
  }
});
