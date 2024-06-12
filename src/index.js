/* Hamburguer Menu */
const hamMenu = document.querySelector('.ham-menu');

const menu = document.querySelector('.menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  menu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (e.target.closest('.menu') || e.target.closest('.ham-menu')) return;
  hamMenu.classList.remove('active');
  menu.classList.remove('active');
});

/* Active link class */

const links = document.querySelectorAll('.menu_link');

links.forEach((link) => {
  link.addEventListener('click', () => {
    links.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
  });
});
