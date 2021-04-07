const bigImg = document.getElementById('img-grande');
const subImg = document.querySelectorAll(' .img-small');

for (let i = 0; i < subImg.length; i++) {
  subImg[i].addEventListener('click', (event) => {
    let src = event.currentTarget.getAttribute('src');
    bigImg.innerHTML = "<img src=" + src + ">";

    for (let i = 0; i < subImg.length; i++) {
      subImg[i].classList.remove('active');
      if (subImg[i].getAttribute('src') == src) {
        subImg[i].classList.add('active');
      }
    }
  });
}
