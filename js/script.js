/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
// Sidebar Toggle
const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});
// Modal
const openModal = document.getElementById('openModal');
openModal.addEventListener('click', () => {
  document.getElementById('vent').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
});
const closeModal = document.getElementById('closeModal');
closeModal.addEventListener('click', () => {
  document.getElementById('vent').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
});
// Slider

// Tabs
const enlaces = document.querySelectorAll('.tabs-tablist-item');
const contentido = document.querySelectorAll('.tabs-content-item');
for (let i = 0; i < contentido.length; i++) {
  contentido[i].classList.add('js-content-hidden');
}

contentido[0].classList.remove('js-content-hidden');

enlaces[0].classList.remove('js-active');

for (let i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener('click', (event) => {
    const id = event.currentTarget.getAttribute('href').substring(1);

    for (let i = 0; i < contentido.length; i++) {
      contentido[i].classList.add('js-content-hidden');
      if (contentido[i].getAttribute('id') === id) {
        contentido[i].classList.remove('js-content-hidden');
      }
    }
    for (let i = 0; i < enlaces.length; i++) {
      enlaces[i].classList.remove('js-active');
    }
    event.currentTarget.classList.add('js-active');
  });
}
