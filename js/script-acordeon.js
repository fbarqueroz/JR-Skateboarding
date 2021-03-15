// Acordeon
const acordeon = document.querySelectorAll('.acordeon-button');
for (let i = 0; i < acordeon.length; i += 1) {
  acordeon[i].addEventListener('click', (event) => {
    event.preventDefault();
    const elemento = event.currentTarget;
    const info = elemento.nextElementSibling;
    if (info.style.display === 'block') {
      info.style.display = 'none';
    } else {
      info.style.display = 'block';
    }
  });
}
