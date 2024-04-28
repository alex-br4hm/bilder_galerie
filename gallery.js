const imgContainer = document.getElementById("imgContainer");
const fullSizeImgContainer = document.getElementById("fullSizeImgContainer");
const slideShowImgContainer = document.getElementById("slideShowImgContainer");
let animalImages = [];
buildAnimalImagesArray();
console.table(animalImages);

function buildAnimalImagesArray() {
  for (let i = 0; i < 21; i++) {
    animalImages.push(`./src/img/img${i}.jpg`);
  }
  loadImages();
}

function loadImages() {
  for (let i = 0; i < animalImages.length; i++) {
    imgContainer.innerHTML += `
        <img onclick="openFullSizeImg(${i})"src="${animalImages[i]}" alt="Image from a animal" id="img${i}" />
        `;
  }
}

function openFullSizeImg(i) {
  fullSizeImgContainer.classList.remove("d-none");
  openFullSizeImgHTML(i);
}

function closeFullSizeImg() {
  fullSizeImgContainer.classList.add("d-none");
}

function fullSizeImgToRight(i) {
  if (i < 21) {
    fullSizeImgToRightHTML(i);
  } else {
    i = 0;
    fullSizeImgToRight(i);
  }
}

function fullSizeImgToLeft(i) {
  if (i > -1) {
    fullSizeImgToLeftHTML(i);
  } else {
    i = animalImages.length - 1;
    fullSizeImgToRight(i);
  }
}

function startSlideShow(i) {
  slideShowImgContainer.classList.remove("d-none");
  fullSizeImgContainer.classList.add("d-none");
  slideShowRunning(i);
}

function slideShowRunning(i) {
  if (i < animalImages.length) {
    slideShowImgContainer.innerHTML = `
      <img onclick="stopSlideShow(${i})" src="${animalImages[i]}" alt="" /> 
    `;
    setTimeout(() => {
      slideShowRunning(i + 1);
    }, 3000);
  }
}

function stopSlideShow(i) {
  slideShowImgContainer.classList.add("d-none");
  fullSizeImgContainer.classList.remove("d-none");
  if (i) {
    openFullSizeImgHTML(i);
  } else {
    loadImages();
  }
}
// +++ HTML +++ //

function openFullSizeImgHTML(i) {
  fullSizeImgContainer.innerHTML = /*html*/ `
        <div class="full-size-btn-container" id="fullSizeBtnContainer">
            <div class="x-btn btn-hover" onclick="closeFullSizeImg()">&times;</div>
              <div onclick="fullSizeImgToLeft(${
                i - 1
              })"class="arrow left-arrow btn-hover">&laquo;</div>
              <div onclick="fullSizeImgToRight(${
                i + 1
              })" class="arrow right-arrow btn-hover" id="rightArrow">&raquo;</div>
              <div onclick="startSlideShow(${i})" class="play-btn" id="slideshowPlayBtn">&blacktriangleright;</div>
        </div>
            <img onclick="closeFullSizeImg()" src="${animalImages[i]}" alt="" />
  `;
  return;
}

function fullSizeImgToRightHTML(i) {
  fullSizeImgContainer.innerHTML = /*html*/ `
    <div class="full-size-btn-container" id="fullSizeBtnContainer">
        <div class="x-btn btn-hover" onclick="closeFullSizeImg()">&times;</div>
          <div onclick="fullSizeImgToLeft(${
            i - 1
          })"class="arrow left-arrow btn-hover">&laquo;</div>
          <div onclick="fullSizeImgToRight(${
            i + 1
          })" class="arrow right-arrow btn-hover" id="rightArrow">&raquo;</div>
          <div onclick="startSlideShow(${i})" class="play-btn" id="slideshowPlayBtn">&blacktriangleright;</div>
    </div>
        <img onclick="closeFullSizeImg()" src="${animalImages[i]}" alt="" />
`;
  return;
}

function fullSizeImgToLeftHTML(i) {
  fullSizeImgContainer.innerHTML = /*html*/ `
    <div class="full-size-btn-container" id="fullSizeBtnContainer">
      <div class="x-btn btn-hover" onclick="closeFullSizeImg()">&times;</div>
          <div onclick="fullSizeImgToLeft(${
            i - 1
          })" class="arrow left-arrow btn-hover">&laquo;</div>
          <div onclick="fullSizeImgToRight(${
            i + 1
          })" class="arrow right-arrow btn-hover" id="rightArrow">&raquo;</div>
          <div onclick="startSlideShow(${i})" class="play-btn" id="slideshowPlayBtn">&blacktriangleright;</div>
    </div>
          <img onclick="closeFullSizeImg()" src="${animalImages[i]}" alt="" />
          `;
  return;
}
