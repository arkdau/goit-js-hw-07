import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector('.gallery');
const markup = galleryItems.map((item) => `<li><a  class="gallery__item" href=${item.original}><img  class="gallery__image"  src=${item.preview} alt=${item.description} width="480"  height=auto></a></li>`);
list.insertAdjacentHTML('beforeend', markup);

const gallery = new SimpleLightbox('.gallery a');
