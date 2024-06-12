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

/* Render Library renders the fetched data by getData on the DOM  */

const renderLibrary = (data) => {
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

/* Render Clients renders the fetched data by getData on the DOM */

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

/* Fetches the data and summon the render functions */
const getData = async () => {
  const response = await fetch('./data/data.json');
  const data = await response.json();
  renderLibrary(data.images);
  renderClients(data.clients);
  return data;
};

/* Calling the get Data function */
getData();