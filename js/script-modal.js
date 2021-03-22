const url = 'https://604ab2419251e100177cf001.mockapi.io/Decks';
fetch(url)
  .then((response) => response.json())
  .then((data) => {

  });
  let listCountry = document.querySelector('#list');
  let cerrar = document.querySelectorAll(".close")[0];
  let abrir = document.querySelectorAll(".cta")[0];
  let modal = document.querySelectorAll(".modal")[0];
  let modalC = document.querySelectorAll(".modal-container")[0];

    abrir.addEventListener("click", function(event){
      event.preventDefault();
      modalC.style.opacity = "1";
      modalC.style.visibility = "visible";
      modal.classList.toggle("modal-close");
    });
    cerrar.addEventListener("click", function(){
      modal.classList.toggle("modal-close");
      modalC.style.opacity = "0";
      modalC.style.visibility = "hidden";
    })

    fetch('https://604ab2419251e100177cf001.mockapi.io/Decks')
      .then((response) => response.json())
      .then((data) => {
        const modalText = document.querySelector('.modal-textos');
        for (let i = 0; i < data.length; i++) {
          let list = document.createElement('li');
          modalText.appendChild(list);
          const info = `
            <div class="modal-info">
                <div class="listSkate">
                  <a href = "${data[1].name}">${data[i].name}</a>
                  <p>Id : ${data[1].id}</p>
                  <p>Price : ${data[1].price}</p>
                  <p>Name : ${data[1].name}</p>
                  <p>Description : ${data[1].description}</p>
                  <p>Currency : ${data[1].currency}</p>
                  <p>Img : ${data[1].img}</p>
                </div>
              <div>
            <div>
          `;
          list.innerHTML = info;
        }
      });
