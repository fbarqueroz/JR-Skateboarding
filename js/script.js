// Drawer
const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});
  
// slider
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
