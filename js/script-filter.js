const myForm = document.getElementById('myForm');
function getDeckinfo(Decks) {
  const decksList = document.getElementById('decks-list');
  decksList.innerHTML = '';
  for (let i = 0; i < Decks.length; i += 1) {
    const deckNameItem = document.createElement('li');
    decksList.appendChild(deckNameItem);
    const info = `
      <div id="${Decks[i].name}title">
        <h3 class='hoverDeck' style='cursor:pointer;'>${Decks[i].name}</h3>
      </div>
      <div id="${Decks[i].name}displayInfo">
        <p> Desciption: ${Decks[i].description}</p>
        <p> Price: ${Decks[i].price}</p>
        <p> Currency: ${Decks[i].currency}</p>
        <button style='cursor:pointer;' id = "${Decks[i].name}close">Close X</button>
      </div>
      `;
    deckNameItem.innerHTML = info;
    const displayInfo = document.getElementById(`${Decks[i].name}displayInfo`);
    displayInfo.style.display = 'none';
    const title = document.getElementById(`${Decks[i].name}title`);
    title.addEventListener('click', () => {
      displayInfo.style.display = 'block';
    });
    const closeInfo = document.getElementById(`${Decks[i].name}close`);
    closeInfo.addEventListener('click', () => {
      displayInfo.style.display = 'none';
    });
  }
}
fetch('https://604ab2419251e100177cf001.mockapi.io/Decks')
  .then((response) => response.json())
  .then((data) => {
    getDeckinfo(data);
    myForm.addEventListener('input', (event) => {
      event.preventDefault();
      const searchEng = myForm.elements[0].value;
      const searchDecks = data.filter((element) => element.name.toLowerCase().includes(`${searchEng.toLowerCase()}`));
      if (!searchDecks) {
        getDeckinfo(data);
      } else {
        getDeckinfo(searchDecks);
      }
    });
  });
