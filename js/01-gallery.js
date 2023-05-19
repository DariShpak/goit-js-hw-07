 import {galleryItems} from "./gallery-items.js"
// Change code below this line

console.log(galleryItems)

const gallery = document.querySelector(".gallery");

(function () {
const markupGallery = galleryItems.map(({preview, original, description}) =>
  `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" 
     data-source="${original}" alt="${description}"/>
   </a>
  </li>`).join("")

  gallery.insertAdjacentHTML("beforeend", markupGallery)
})()

gallery.addEventListener("click", onImgClick)

function onImgClick(event) {
 event.preventDefault()

  if (!event.target.nodeName === 'img') {
    return
  }
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}" width="1280" height="853">`,
      {
        onShow: (instance) => {
          window.addEventListener("keydown", event)
          console.log("onShow", instance)
        },
        onClose: (instance) => {
          window.removeEventListener("keydown", event)
          console.log("onClose", instance)
        },
      }
    )
  instance.show()

  window.addEventListener("keydown", (event) => {
    if (instance.visible()) {
      const keyName = event.key
      if (keyName === "Escape") {
        instance.close()
      }
    }
  })
}
