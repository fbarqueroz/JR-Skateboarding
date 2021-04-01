/* eslint-disable no-plusplus */
// Drawer
const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});
// Drawer Car
const btnShop = document.querySelector('.drawer__shop--btn');
btnShop.addEventListener('click', () => {
  document.getElementById('drawer__shop').classList.toggle('active');
});

// Slider-decks
let indice = 1;
let i = '';
function muestraSlides(n) {
  const slides = document.getElementsByClassName('miSlider');
  if (n > slides.length) {
    indice = 1;
  }
  if (n < 1) {
    indice = slides.length;
  }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  slides[indice - 1].style.display = 'block';
}
function avanzaSlide() {
  muestraSlides(indice += 1);
}
const avanzar = document.getElementById('avanzar');
avanzar.addEventListener('click', () => {
  avanzaSlide();
});
function retrocederSlide() {
  muestraSlides(indice -= 1);
}
const retroceder = document.getElementById('retroceder');
retroceder.addEventListener('click', () => {
  retrocederSlide();
});
muestraSlides(indice);

// Tabs

function updateVisibleContent(id) {
  // Actualiza los divs de contenido.
  const enlaces = document.querySelectorAll('.tabs-tablist-item');
  const content = document.querySelectorAll('.tabs-content-item');
  for (let y = 0; y < content.length; y += 1) {
    content[y].classList.add('js-content-hidden');
    if
    (content[y].getAttribute('id') === id) {
      content[y].classList.remove('js-content-hidden');
    }
  }
  // Actualiza los enlaces, para mostrar como resaltado el que está seleccionado.
  for (let t = 0; t < enlaces.length; t += 1) {
    enlaces[t].classList.remove('js-active');
    if
    (enlaces[t].getAttribute('href').substring(1) === id) {
      enlaces[t].classList.add('js-active');
    }
  }
}
function clickHandler(event) {
  event.preventDefault();
  const id = event.currentTarget.getAttribute('href').substring(1);
  updateVisibleContent(id);
}
const enlaces = document.querySelectorAll('.tabs-tablist-item');
for (let p = 0; p < enlaces.length; p += 1) {
  enlaces[p].addEventListener('click', clickHandler);
}
updateVisibleContent(enlaces[0].getAttribute('href').substring(1));

// Slider-soon
let index = 1;
let g = '';
function showSlides(x) {
  const slider = document.getElementsByClassName('slider-soon');
  if (x > slider.length) {
    index = 1;
  }
  if (x < 1) {
    index = slider.length;
  }
  for (g = 0; g < slider.length; g += 1) {
    slider[g].style.display = 'none';
  }
  slider[index - 1].style.display = 'block';
}
function nextSlides() {
  showSlides(index += 1);
}
const next = document.getElementById('avanzarSoon');
next.addEventListener('click', () => {
  nextSlides();
});
function afterSlides() {
  showSlides(index -= 1);
}
const after = document.getElementById('retrocederSoon');
after.addEventListener('click', () => {
  afterSlides();
});
showSlides(index);

// Products
fetch('https://604ab2419251e100177cf001.mockapi.io/Decks')
  .then((response) => response.json())
  .then((data) => {
    const productsContainer = document.getElementsByClassName('product__container');
    // eslint-disable-next-line no-shadow
    for (let i = 0; i < data.length; i += 1) {
      const ul = document.createElement('ul');
      const list = document.createElement('li');
      productsContainer.appendChild(ul);
      ul.appendChild(list);
      const info = `
        <div class="modal-info">
            <div class="listSkate">
              <img src="${data[i].img}" alt="${data[i].name}">
              <p>${data[i].brand}</p>
              <h3>${data[i].name}</h3>
              <p>Price: $${data[i].price}</p>
              <p><b>Description: </b>${data[i].description}</p>
            </div>
          <div>
        <div>
      `;
      list.appendChild(info);
      list.innerHTML = info;
    }
  });

// Filter
const myForm = document.getElementById('myForm');
function getDeckinfo(Decks) {
  const decksList = document.getElementById('decks-list');
  decksList.innerHTML = '';
  for (let i = 0; i < Decks.length; i += 1) {
    const deckNameItem = document.createElement('li');
    decksList.appendChild(deckNameItem);
    const info = `
      <div id="${Decks[i].name}title">
        <h3 class='hoverDeck' style='cursor:pointer;'>${Decks[i].name}</h3>
      </div>
      <div id="${Decks[i].name}displayInfo">
        <p> Desciption: ${Decks[i].description}</p>
        <p> Price: ${Decks[i].price}</p>
        <p> Currency: ${Decks[i].currency}</p>
        <button style='cursor:pointer;' id = "${Decks[i].name}close">Close X</button>
      </div>
      `;
    deckNameItem.innerHTML = info;
    const displayInfo = document.getElementById(`${Decks[i].name}displayInfo`);
    displayInfo.style.display = 'none';
    const title = document.getElementById(`${Decks[i].name}title`);
    title.addEventListener('click', () => {
      displayInfo.style.display = 'block';
    });
    const closeInfo = document.getElementById(`${Decks[i].name}close`);
    closeInfo.addEventListener('click', () => {
      displayInfo.style.display = 'none';
    });
  }
}
fetch('https://604ab2419251e100177cf001.mockapi.io/Decks')
  .then((response) => response.json())
  .then((data) => {
    getDeckinfo(data);
    myForm.addEventListener('input', (event) => {
      event.preventDefault();
      const searchEng = myForm.elements[0].value;
      const searchDecks = data.filter((element) => element.name.toLowerCase().includes(`${searchEng.toLowerCase()}`));
      if (!searchDecks) {
        getDeckinfo(data);
      } else {
        getDeckinfo(searchDecks);
      }
    });
  });
