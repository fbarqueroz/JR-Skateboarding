// Products
const modal = document.querySelector('.modal');
const flex = document.querySelector('.flex');
const abrir = document.querySelector('.open');
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
fetch('https://604ab2419251e100177cf001.mockapi.io/Decks')
  .then((response) => response.json())
  .then((data) => {
    const modalText = document.querySelector('.modal__text--decks');
    for (let i = 0; i < data.length; i += 1) {
      modalText.innerHTML = `
              <div >
                <img src="${data[i].img}" alt=""><br>
                <a href = '#'${data[i].name}">${data[i].name}</a>
                <p>${data[i].currency}${data[i].price}</p>
                <p>Name: ${data[i].name}</p>
                <p>Description: ${data[i].description}</p>
              </div>
        `;
    }
    console.log(data);
  });
