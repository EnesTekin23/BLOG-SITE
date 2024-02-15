
const images = document.querySelectorAll(".image-container img");
const imageModal = document.querySelector(".image-modal");
const fullscreenImage = document.querySelector(
  ".fullscreen-image-container img"
);


let imgSrc = "";


function displayImage(image) {
  
  imgSrc = image.getAttribute("src");

  
  fullscreenImage.setAttribute("src", imgSrc);

  
  imageModal.classList.add("toggled");
}


images.forEach((image) =>
  image.addEventListener("click", (e) => displayImage(e.target))
);


imageModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("image-modal")) {
    imageModal.classList.remove("toggled");
  }
});