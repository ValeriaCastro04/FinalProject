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

//---------------------------------------------------------------------------------------------------------------------------------
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

//---------------------------------------------------------------------------------------------------------------------------------
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

    // Evento botones
    if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
    }

    // Iniciar automático
    setInterval(nextSlide, 5000);

//---------------------------------------------------------------------------------------------------------------------------------
    // Cargar FOOTER
  fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });


});