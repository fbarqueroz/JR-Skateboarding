// Tabs
function updateVisibleContent(id) {
  // Actualiza los divs de contenido.
  const enlaces = document.querySelectorAll('.tabs-tablist-item');
  const content = document.querySelectorAll('.tabs-content-item');
  for (let i = 0; i < content.length; i += 1) {
    content[i].classList.add('js-content-hidden');
    if
    (content[i].getAttribute('id') === id) {
      content[i].classList.remove('js-content-hidden');
    }
  }
  // Actualiza los enlaces, para mostrar como resaltado el que está seleccionado.
  for (let i = 0; i < enlaces.length; i += 1) {
    enlaces[i].classList.remove('js-active');
    if
    (enlaces[i].getAttribute('href').substring(1) === id) {
      enlaces[i].classList.add('js-active');
    }
  }
}
function clickHandler(event) {
  event.preventDefault();
  const id = event.currentTarget.getAttribute('href').substring(1);
  updateVisibleContent(id);
}
const enlaces = document.querySelectorAll('.tabs-tablist-item');
for (let i = 0; i < enlaces.length; i += 1) {
  enlaces[i].addEventListener('click', clickHandler);
}
updateVisibleContent(enlaces[0].getAttribute('href').substring(1));
