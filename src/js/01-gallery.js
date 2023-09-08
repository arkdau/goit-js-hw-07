import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox.js';

// Change code below this line
let instance = null;
const list = document.querySelector('.gallery');
const markup = galleryItems.map((item) => `<li class="gallery__item"><a  class="gallery__link" href=${item.original}><img  class="gallery__image"  src=${item.preview} data-source=${item.original} alt=${item.description} width="480"  height=auto></a></li>`);

list.insertAdjacentHTML('beforeend', markup);
list.addEventListener('click', (event) => {
  event.preventDefault(); // Stop the default action
  const elem = event.target;
  // console.log(elem.currentSrc);
  // let src = '';
  const src = elem.dataset.source;
  console.log(src);

  // Second metod
  if (src !== undefined) {
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
  }
});

// Close modal window
document.body.addEventListener('keyup', (e) => {
  // Cancel the default action to avoid it being handled twice
  e.preventDefault();
  if (e.key === 'Escape' && instance !== null && instance.visible()) {
    instance.close();
  }
});
