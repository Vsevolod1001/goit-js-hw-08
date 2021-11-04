import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryElem = document.querySelector('.gallery');

galleryElem.innerHTML = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item"><a href="${original}" class="gallery__link"><img src="${preview}" alt="${description}" class="gallery__image"></a></li>`,
  )
  .join('');


  let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
