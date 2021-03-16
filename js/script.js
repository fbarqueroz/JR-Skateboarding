/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */

// Sidebar Toggle
const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});
