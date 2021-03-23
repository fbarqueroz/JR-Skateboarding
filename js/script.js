// Drawer
const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});

// Slider
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



function showSlider(n) {
  const slider = document.getElementsByClassName('slider-soon');
  if (n > slides.length) {
    indice = 1;
  }
  if (n < 1) {
    indice = slider.length;
  }
  for (i = 0; i < slides.length; i += 1) {
    slider[i].style.display = 'none';
  }
  slider[indice - 1].style.display = 'block';
}
function nextSlider() {
  showSlider(indice += 1);
}
const next = document.getElementById('next');
next.addEventListener('click', () => {
  nextSlider();
});
function afterSlider() {
  showSlider(indice -= 1);
}
const after = document.getElementById('after');
after.addEventListener('click', () => {
  afterSlider();
});
showSlider(indice);
