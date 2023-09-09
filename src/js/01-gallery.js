import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from '../basiclightbox.js';

// ///////////////////////////
// First solution.
// Change code below this line.
//

class ClassLightBox {
  instance;

  controller;

  constructor() { }

  // Close modal window
  escspePress = (e) => {
    e.preventDefault();
    if (e.key === 'Escape') {
      this.instance.close();
      // console.log(this);
      this.controller.abort(); // remove listener
      console.log(
        'event listener was removed from body (keydown-Escape), aborted = ',
        this.controller.signal.aborted,
      );
    }
  };

  create(e) {
    e.preventDefault(); // Stop the default action
    const elem = e.target;
    const src = elem.dataset.source;
    console.log(src);

    if (elem.nodeName === 'IMG') {
      // create modal
      this.instance = basicLightbox.create(`
         <img src=${src} width="1280" height=auto>
       `);
      this.instance.show();
      this.controller = new AbortController();
      document.body.addEventListener('keydown', this.escspePress, {
        signal: this.controller.signal,
      });
    }
  }
}

const list = document.querySelector('.gallery');
const markup = galleryItems.map((item) =>
  `<li class="gallery__item"><a  class="gallery__link" href=${item.original}><img  class="gallery__image"  src=${item.preview} data-source=${item.original} alt="${item.description}" width="480"  height=auto></a></li>`).join('');
list.insertAdjacentHTML('beforeend', markup);

const imgLightBox = new ClassLightBox();
list.addEventListener('click', imgLightBox.create.bind(imgLightBox));

// ///////////////////////////
// Second solution.
// Change code below this line

// let controller;
// let instance = null;

// Close modal window
// function escspePress(e) {
//  e.preventDefault();
//  console.log('enter escapePress');
//  if (e.key === 'Escape') {
//    instance.close();
//    console.log(this);
//    controller.abort(); // remove listener
//    console.log('event listener was removed from body, aborted = ', controller.signal.aborted);
//  }
// }

// const list = document.querySelector('.gallery');
// const markup = galleryItems.map((item) => `<li class="gallery__item"><a  class="gallery__link" href=${item.original}>
// <img  class="gallery__image"  src=${item.preview} data-source=${item.original} alt="${item.description}" width="480"  height=au to></a></li>`).join('');

// list.insertAdjacentHTML('beforeend', markup);
// list.addEventListener('click', (event) => {
//  event.preventDefault(); // Stop the default action
//  const elem = event.target;
//  const src = elem.dataset.source;
//  console.log(src);

//  if (elem.nodeName === 'IMG') {
// create modal
//    instance = basicLightbox.create(`
//         <img src=${src} width="1280" height=auto>
//       `);
//    instance.show();
//    controller = new AbortController();
//    document.body.addEventListener('keydown', escspePress, { signal: controller.signal });
//  }
// });
