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
