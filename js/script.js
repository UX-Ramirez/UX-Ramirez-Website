// |-----| Scroll Effect function |-----| //
function userScroll() {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 35) {
        navbar.classList.add('background-black');
      } else {
        navbar.classList.remove('background-black');
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', userScroll);
// |-----| Scroll Effect function |-----| //

// |-----| SweetAlert2 "Contact" alert |-----| //
function sendMessage() {
  Swal.fire({
      title: "Message sent!",
      text: "Your message will be delivered to Abril",
      icon: "success",

      confirmButtonColor: '#6C2AD9',
      confirmButtonText: 'Entendido'
  });
}
// |-----| SweetAlert2 "Contact" alert |-----| //

document.querySelectorAll('.btnClose').forEach(function (button) {
  button.addEventListener('click', function () {

    var modal = button.closest('.modal');
    var bootstrapModal = bootstrap.Modal.getInstance(modal);
    
    if (bootstrapModal) {
      bootstrapModal.hide(); // Cierra el modal
    }

    window.location.href = '#contact';
  });
});