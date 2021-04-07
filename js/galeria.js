const bigImg = document.getElementById('img-grande');
const subImg = document.querySelectorAll('.img-small');

for (let i = 0; i < subImg.length; i += 1) {
  subImg[i].addEventListener('click', (event) => {
    const src = event.currentTarget.getAttribute('src');
    bigImg.innerHTML = `<img src=${src}>`;

    // eslint-disable-next-line no-shadow
    for (let i = 0; i < subImg.length; i += 1) {
      subImg[i].classList.remove('active');
      if (subImg[i].getAttribute('src') === src) {
        subImg[i].classList.add('active');
      }
    }
  });
}
