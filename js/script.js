// |-----| Scroll Effect function |-----| //
function userScroll() {
    const navbar = document.querySelector('.navbar');
    const toTopButton = document.getElementById("to-top");

    window.addEventListener('scroll', () => {
      if (window.scrollY > 35) {
        toTopButton.classList.add("show");
        navbar.classList.add('bg-dark');
      } else {
        toTopButton.classList.remove("show");
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