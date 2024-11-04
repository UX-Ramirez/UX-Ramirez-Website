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