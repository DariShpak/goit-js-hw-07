import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery")

  ; (function () {
    const markupGallery = galleryItems
      .map(
        ({ preview, original, description }) =>
          `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" 
     alt="${description}"/>
   </a>
  </li>`
      )
      .join("")

    gallery.insertAdjacentHTML("beforeend", markupGallery)
  })();


let lightbox = new SimpleLightbox(".gallery li a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  scrollZoom: false,
})


