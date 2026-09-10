/* Shared progressive-enhancement behaviour. Every feature is optional so one
   page-specific element cannot prevent the rest of the site from working. */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const supportsIntersectionObserver = "IntersectionObserver" in window;

const reveals = document.querySelectorAll(".reveal");
if (prefersReducedMotion.matches || !supportsIntersectionObserver) {
  reveals.forEach((element) => element.classList.add("show"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  reveals.forEach((element) => revealObserver.observe(element));
}

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");
const useCustomCursor = dot && outline
  && window.matchMedia("(hover: hover) and (pointer: fine)").matches
  && !prefersReducedMotion.matches;

if (useCustomCursor) {
  document.documentElement.classList.add("custom-cursor-enabled");
  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;
  let animationFrame;

  const renderCursor = () => {
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
    animationFrame = requestAnimationFrame(renderCursor);
  };

  document.addEventListener("pointermove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  }, { passive: true });
  document.addEventListener("pointerover", (event) => {
    if (event.target.closest("a, button, .project-card")) outline.classList.add("is-hovering");
  });
  document.addEventListener("pointerout", (event) => {
    if (event.target.closest("a, button, .project-card")) outline.classList.remove("is-hovering");
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(animationFrame);
    else animationFrame = requestAnimationFrame(renderCursor);
  });
  animationFrame = requestAnimationFrame(renderCursor);
}

const makeExclusive = (selector) => {
  const items = document.querySelectorAll(selector);
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const shouldOpen = !item.classList.contains("active");
      items.forEach((otherItem) => otherItem.classList.remove("active"));
      item.classList.toggle("active", shouldOpen);
    });
  });
};
makeExclusive(".service-item");
makeExclusive(".faq-item");

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("[data-theme]");
const logo = document.getElementById("navbar-logo");
const setNavigationTheme = (theme) => {
  const lightTheme = theme === "light";
  navLinks.forEach((link) => {
    link.classList.toggle("link-dark", lightTheme);
    link.classList.toggle("link-light", !lightTheme);
  });
  if (logo) logo.src = lightTheme
    ? "assets/uxRamirezLogo_light.png"
    : "assets/uxRamirezLogo_dark.png";
};
if (sections.length && supportsIntersectionObserver) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setNavigationTheme(entry.target.dataset.theme);
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -70% 0px" });
  sections.forEach((section) => navObserver.observe(section));
}

const viewMoreBtn = document.getElementById("viewMoreBtn");
if (viewMoreBtn) {
  viewMoreBtn.addEventListener("click", () => {
    document.querySelectorAll(".extra-project").forEach((project) => project.classList.add("show-project"));
    viewMoreBtn.hidden = true;
  });
}
