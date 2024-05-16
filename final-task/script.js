const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section');

navLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetSection = document.getElementById(link.getAttribute('href').substring(1));
    const currentActiveLink = document.querySelector('nav a.active');

    sections.forEach((section) => {
      section.classList.remove('active');
    });
    targetSection.classList.add('active');

    if (currentActiveLink) {
      currentActiveLink.classList.remove('active');
    }
    link.classList.add('active');
  });
});
