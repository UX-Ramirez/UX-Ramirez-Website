/* |=====| SCROLL REVEAL |=====| */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach(el => revealObserver.observe(el));



/* |=====| CURSOR |=====| */

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;

let outlineX = 0;
let outlineY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
});

function animate() {
  outlineX += (mouseX - outlineX) * 0.15;
  outlineY += (mouseY - outlineY) * 0.15;

  outline.style.left = outlineX + "px";
  outline.style.top = outlineY + "px";

  requestAnimationFrame(animate);
}

animate();



/* HOVER CURSOR */

const hoverElements = document.querySelectorAll("a, button, .project-card");

hoverElements.forEach(el => {
  el.addEventListener("mouseenter", () => {
    outline.style.transform = "translate(-50%, -50%) scale(1.8)";
    outline.style.borderColor = "#3b82f6";
  });

  el.addEventListener("mouseleave", () => {
    outline.style.transform = "translate(-50%, -50%) scale(1)";
    outline.style.borderColor = "rgba(142,227,255,0.5)";
  });
});



const serviceItems = document.querySelectorAll(".service-item");

serviceItems.forEach(item => {

  item.addEventListener("click", () => {

    const isActive = item.classList.contains("active");

    // cerrar todos
    serviceItems.forEach(i => i.classList.remove("active"));

    // abrir solo si no estaba activo
    if (!isActive) {
      item.classList.add("active");
    }

  });

});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {

    const isActive = item.classList.contains("active");

    faqItems.forEach(i => i.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }

  });
});




/* |=====| NAVBAR LINK THEME |=====| */
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("[data-theme]");
const logo = document.getElementById("navbar-logo");

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const theme = entry.target.getAttribute("data-theme");

      navLinks.forEach(link => {
        link.classList.remove("link-light", "link-dark");

        if (theme === "light") {
          link.classList.add("link-dark");
          logo.src = "assets/uxRamirezLogo_light.png";

        } else {
          link.classList.add("link-light");
          logo.src = "assets/uxRamirezLogo_dark.png";
        }
      });

    }

  });
}, {
  threshold: 0.2,
  rootMargin: "0px 0px -70% 0px"
});

sections.forEach(section => navObserver.observe(section));


