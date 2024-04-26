const imgContainer = document.getElementById("imgContainer");
let animalImages = [];

buildAnimalImagesArray();

function buildAnimalImagesArray() {
  for (let i = 0; i < 21; i++) {
    animalImages.push(`./src/img/img${[i]}.jpg`);
  }
  loadImages();
}

function loadImages() {
  for (let i = 0; i < animalImages.length; i++) {
    imgContainer.innerHTML += `
        <img src="./src/img/img${[
          i,
        ]}.jpg" alt="Image from a animal" id="img0" />
        `;
  }
}
