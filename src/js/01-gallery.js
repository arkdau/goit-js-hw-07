import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from '../basiclightbox.js';

// Change code below this line
class gallery {
}
let controller;
let instance = null;

// Close modal window
function escspePress(e) {
  e.preventDefault();
  console.log('enter escapePress');
  if (e.key === 'Escape') {
    instance.close();
    console.log(this);
    controller.abort(); // remove listener
    console.log('event listener was removed from body, aborted = ', controller.signal.aborted);
  }
}

const list = document.querySelector('.gallery');
const markup = galleryItems.map((item) => `<li class="gallery__item"><a  class="gallery__link" href=${item.original}><img  class="gallery__image"  src=${item.preview} data-source=${item.original} alt="${item.description}" width="480"  height=auto></a></li>`).join('');

list.insertAdjacentHTML('beforeend', markup);
list.addEventListener('click', (event) => {
  event.preventDefault(); // Stop the default action
  const elem = event.target;
  // console.log(elem.currentSrc);
  // let src = '';
  const src = elem.dataset.source;
  console.log(src);

  if (elem.nodeName === 'IMG') {
  // Second metod
  //   const li = elem.closest('li'); // get reference
  //   const nodes = Array.from(li.closest('ul').children); // get Array
  //   const index = nodes.indexOf((li));
  //   console.log(index);
  //   console.log(elem);
  //   src = galleryItems[index].original;

    // create modal
    instance = basicLightbox.create(`
         <img src=${src} width="1280" height=auto>
       `);
    instance.show();
    controller = new AbortController();
    document.body.addEventListener('keydown', escspePress, { signal: controller.signal });
  }
});
