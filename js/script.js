// Drawer
const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
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
  for (let j = 0; j < content.length; j += 1) {
    content[j].classList.add('js-content-hidden');
    if
    (content[j].getAttribute('id') === id) {
      content[j].classList.remove('js-content-hidden');
    }
  }
  // Actualiza los enlaces, para mostrar como resaltado el que está seleccionado.
  for (let j = 0; j < enlaces.length; j += 1) {
    enlaces[j].classList.remove('js-active');
    if
    (enlaces[j].getAttribute('href').substring(1) === id) {
      enlaces[j].classList.add('js-active');
    }
  }
}
function clickHandler(event) {
  event.preventDefault();
  const id = event.currentTarget.getAttribute('href').substring(1);
  updateVisibleContent(id);
}
const enlaces = document.querySelectorAll('.tabs-tablist-item');
for (let j = 0; i < enlaces.length; j += 1) {
  enlaces[j].addEventListener('click', clickHandler);
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
