import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from './basiclightbox.js';

// Change code below this line

const list = document.querySelector('.gallery');
const markup = galleryItems.map((item) => `<li class="gallery__item"><a  class="gallery__link" href=${item.original}><img  class="gallery__image"  src=${item.preview} data-source=${item.original} alt=${item.description} width="480"  height=auto></a></li>`);

list.insertAdjacentHTML('beforeend', markup);
list.addEventListener('click', (event) => {
  event.preventDefault(); // Stop the default action
  const elem = event.target;
  console.log(elem.currentSrc);
  // find li index
  if (elem.currentSrc !== undefined) {
    const li = elem.closest('li'); // get reference
    const nodes = Array.from(li.closest('ul').children); // get Array
    const index = nodes.indexOf((li));
    console.log(index);
    console.log(elem);
    console.log(elem.currentSrc);
    // create modal
    const instance = basicLightbox.create(`
      <img src=${galleryItems[index].original} width="1280" height=auto>
    `);
    instance.show();
  }
});

console.log(galleryItems);
console.log(markup[0]);
