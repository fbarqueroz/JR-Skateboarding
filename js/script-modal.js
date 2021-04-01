// Products
const modal = document.getElementById('miModal');
const flex = document.getElementById('flex');
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('close');

abrir.addEventListener('click', () => {
  modal.style.display = 'block';
});

cerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target === flex) {
    modal.style.display = 'none';
  }
});
fetch('https://604ab2419251e100177cf001.mockapi.io/Decks')
  .then((response) => response.json())
  .then((data) => {
    const modalText = document.querySelector('.modal__text--decks');
    const idDeck = document.getElementsByClassName('1');
    for (let i = 0; i < data.length; i += 1) {
      if (idDeck === data[i].id) {
        modalText.innerHTML = ` 
              <div >     
                <img src="${data[i].img}" alt=""><br>
                <a href = ;p./;'${data[i].name}">${data[i].name}</a>
                <p>${data[i].currency}${data[i].price}</p>
                <p>Name: ${data[i].name}</p>
                <p>Description: ${data[i].description}</p>
              </div>
        `;
      } else {
        modalText.innerHTML = 'Hola';
      }
    }
  });
