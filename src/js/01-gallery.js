// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');

const listItemsMarkup = createListItemsMarkup(galleryItems);

galleryContainer.innerHTML = listItemsMarkup;

function createListItemsMarkup(gallery){
    const markup = gallery.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
                `;
    }).join('');
    return markup;
}

let gallery = new SimpleLightbox('.gallery a', { 'captionsData' : 'alt', 'captionDelay': 250 });
gallery.on('show.simplelightbox', function () {
	// do somethingвЂ¦
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});

console.log(galleryItems);
