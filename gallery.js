const imgContainer = document.getElementById("imgContainer");
const fullSizeImgContainer = document.getElementById("fullSizeImgContainer");
const slideShowImgContainer = document.getElementById("slideShowImgContainer");
const animalImgBtn = document.getElementById("animalImgBtn");
const plantsImgBtn = document.getElementById("plantsImgBtn");
const rocksImgBtn = document.getElementById("rocksImgBtn");

let animalImages = [];
let plantsImages = [];
let rocksImages = [];
buildAnimalImagesArray();
buildPlantsImagesArray();
buildRocksImagesArray();

function buildAnimalImagesArray() {
  for (let i = 0; i < 21; i++) {
    animalImages.push(`./src/img/animals/animal${i}.jpg`);
  }
  loadImages(animalImages);
}

function buildPlantsImagesArray() {
  for (let i = 0; i < 21; i++) {
    plantsImages.push(`./src/img/plants/plant${i}.jpg`);
  }
}

function buildRocksImagesArray() {
  for (let i = 0; i < 21; i++) {
    rocksImages.push(`./src/img/rocks/rock${i}.jpg`);
  }
}

// ------- //

function loadImages(arr) {
  for (let i = 0; i < arr.length; i++) {
    imgContainer.innerHTML += `
        <img loading="lazy" onclick="openFullSizeImg(${i})"src="${arr[i]}" alt="Image from a animal" id="img${i}" />
        `;
  }
}

function loadAnimalImages() {
  animalImgBtn.classList.add("active-link");
  plantsImgBtn.classList.remove("active-link");
  rocksImgBtn.classList.remove("active-link");

  imgContainer.innerHTML = "";
  loadImages(animalImages);
}

function loadPlantsImages() {
  animalImgBtn.classList.remove("active-link");
  plantsImgBtn.classList.add("active-link");
  rocksImgBtn.classList.remove("active-link");

  imgContainer.innerHTML = "";
  loadImages(plantsImages);
}

function loadRocksImages() {
  animalImgBtn.classList.remove("active-link");
  plantsImgBtn.classList.remove("active-link");
  rocksImgBtn.classList.add("active-link");

  imgContainer.innerHTML = "";
  loadImages(rocksImages);
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
    imgContainer.innerHTML = "";
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
