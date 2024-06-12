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

/* Creating Grid Table for Organized Knowledge */

const renderGrid = (data) => {
  const grid = document.querySelector('.grid');
  data.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
    `;
    grid.appendChild(card);
  });
};

const renderClients = (data) => {
  const clients = document.querySelector('.clients_container');
  data.forEach((item) => {
    const client = document.createElement('div');
    client.classList.add('client');
    client.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
    `;
    clients.appendChild(client);
  });
};

const getData = async () => {
  const response = await fetch('./data/data.json');
  const data = await response.json();
  renderGrid(data.images);
  renderClients(data.clients);
  return data;
};

getData();