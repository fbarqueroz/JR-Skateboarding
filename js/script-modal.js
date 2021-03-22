const cerrar = document.querySelectorAll('.close')[0];
const abrir = document.querySelectorAll('.cta')[0];
const modal = document.querySelectorAll('.modal')[0];
const modalC = document.querySelectorAll('.modal-container')[0];

abrir.addEventListener('click', (event) => {
  event.preventDefault();
  modalC.style.opacity = '1';
  modalC.style.visibility = 'visible';
  modal.classList.toggle('modal-close');
});
cerrar.addEventListener('click', () => {
  modal.classList.toggle('modal-close');
  modalC.style.opacity = '0';
  modalC.style.visibility = 'hidden';
});

fetch('https://604ab2419251e100177cf001.mockapi.io/Decks')
  .then((response) => response.json())
  .then((data) => {
    const modalText = document.querySelector('.modal-textos');
    for (let i = 0; i < data.length; i += 1) {
      const list = document.createElement('li');
      modalText.appendChild(list);
      const info = `
        <div class="modal-info">
            <div class="listSkate">
              <a href = ;p./;'${data[i].name}">${data[i].name}</a>
              <p>Id : ${data[i].id}</p>
              <p>${data[i].currency}</p>
              <p>${data[i].price}</p>
              <p>Name: ${data[i].name}</p>
              <p>Description: ${data[i].description}</p>
              <p>${data[i].img}</p>
            </div>
          <div>
        <div>
      `;
      list.innerHTML = info;
    }
  });
