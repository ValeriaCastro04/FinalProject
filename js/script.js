document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 100);

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
    "Make friends in your major — they'll literally save your life (exams, homework, and sanity).",
    "Don’t fall asleep in the first classes... that’s when professors drop key info for the semester.",
    "Keep a visible calendar — time in college moves faster than you think.",
    "Ask questions, even the 'dumb' ones. Better a small doubt than a big mistake.",
    "Take advantage of free resources: tutoring, library, counseling... they exist for a reason.",
    "Never underestimate the power of coffee and a good study playlist.",
    "Back up everything to the cloud. Always. Just in case.",
    "Start assignments earlier than you think you need to — future you will thank you.",
    "If you’re lost, ask a second- or third-year student. They’ve probably survived what you’re facing.",
    "Don’t just study — explore clubs, events, and fun stuff too. Balance is key!"
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

  //Scroll Reveal Effect
  // Añadir clase reveal automáticamente
  const revealTargets = document.querySelectorAll(".card, .page-intro");
  revealTargets.forEach(el => el.classList.add("reveal"));
});

// Scroll Reveal Effect
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
