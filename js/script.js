// |-----| Scroll Effect function |-----| //
function userScroll() {
  const navbar = document.querySelector('.navbar');
  const toTopButton = document.getElementById("to-top");
  const popup = document.getElementById("popup");

  let popupClosed = false; // Bandera para rastrear si el popup fue cerrado

  // Oculta el popup manualmente
  document.getElementById('popup-close').addEventListener('click', () => {
      popup.classList.remove("show");
      popupClosed = true; // Marca el popup como cerrado
  });

  // Controla el comportamiento al hacer scroll
  window.addEventListener('scroll', () => {
      if (window.scrollY > 35) {
          toTopButton.classList.add("show");
          navbar.classList.add('bg-dark');

          // Solo muestra el popup si no fue cerrado manualmente
          if (!popupClosed) {
              popup.classList.add("show");
          }
      } else {
          toTopButton.classList.remove("show");
          popup.classList.remove("show");
          navbar.classList.remove('bg-dark');
      }
  });
}

document.addEventListener('DOMContentLoaded', userScroll);
// |-----| Scroll Effect function |-----| //

// |-----| Scroll To Top function |-----| //
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// |-----| Scroll To Top function |-----| //

// |-----| SweetAlert2 "Contact" alert |-----| //
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  Swal.fire({
    title: "Message sent!",
    text: "Your message will be delivered to Abril",
    icon: "success",
    confirmButtonColor: '#6C2AD9',
    confirmButtonText: 'Close'
  }).then((result) => {
    if (result.isConfirmed) {
      this.submit();
    }
  });
});
// |-----| SweetAlert2 "Contact" alert |-----| //

document.getElementById('popup-close').addEventListener('click', () => {
  const popup = document.getElementById('popup');
  popup.classList.remove('show');
});