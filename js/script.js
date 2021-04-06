/* eslint-disable no-plusplus */
// Drawer
const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});

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
