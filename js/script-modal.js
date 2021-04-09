// Products
const modal = document.getElementById('miModal');
const flex = document.getElementById('flex');
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('close');

abrir.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'block';
});

cerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === flex) {
    modal.style.display = 'none';
  }
});
