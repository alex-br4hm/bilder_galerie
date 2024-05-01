const imgContainer = document.getElementById("imgContainer");
const fullSizeImgContainer = document.getElementById("fullSizeImgContainer");
const slideShowImgContainer = document.getElementById("slideShowImgContainer");
const animalImgBtn = document.getElementById("animalImgBtn");
const plantsImgBtn = document.getElementById("plantsImgBtn");
const rocksImgBtn = document.getElementById("rocksImgBtn");

let imageArray = [];

buildAnimalImagesArray();
loadImages();

// build the array for the category

function buildAnimalImagesArray() {
  imageArray = [];
  for (let i = 0; i < 21; i++) {
    imageArray.push(`./src/img/animals/animal${i}.jpg`);
  }
}

function buildPlantsImagesArray() {
  imageArray = [];
  for (let i = 0; i < 21; i++) {
    imageArray.push(`./src/img/plants/plant${i}.jpg`);
  }
}

function buildRocksImagesArray() {
  imageArray = [];
  for (let i = 0; i < 21; i++) {
    imageArray.push(`./src/img/rocks/rock${i}.jpg`);
  }
}

// ------- //

function loadImages() {
  for (let i = 0; i < imageArray.length; i++) {
    imgContainer.innerHTML += `
        <img loading="lazy" onclick="openFullSizeImg(${i})"src="${imageArray[i]}" alt="Image of something" id="img${i}" />
        `;
  }
}

function loadAnimalImages() {
  animalImgBtn.classList.add("active-link");
  plantsImgBtn.classList.remove("active-link");
  rocksImgBtn.classList.remove("active-link");

  imgContainer.innerHTML = "";
  buildAnimalImagesArray();
  loadImages();
}

function loadPlantsImages() {
  animalImgBtn.classList.remove("active-link");
  plantsImgBtn.classList.add("active-link");
  rocksImgBtn.classList.remove("active-link");

  imgContainer.innerHTML = "";
  buildPlantsImagesArray();
  loadImages();
}

function loadRocksImages() {
  animalImgBtn.classList.remove("active-link");
  plantsImgBtn.classList.remove("active-link");
  rocksImgBtn.classList.add("active-link");

  imgContainer.innerHTML = "";
  buildRocksImagesArray();
  loadImages();
}

// ------- //

function openFullSizeImg(i) {
  fullSizeImgContainer.classList.remove("d-none");
  if (animalImgBtn.classList.contains("active-link")) {
    openFullSizeImgHTML(i);
  }
  if (plantsImgBtn.classList.contains("active-link")) {
    openFullSizeImgHTML(i);
  }
  if (rocksImgBtn.classList.contains("active-link")) {
    openFullSizeImgHTML(i);
  }
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
    i = imageArray.length - 1;
    fullSizeImgToRight(i);
  }
}

// --- Slideshow --- //

let slideshowTimeout;

function startSlideShow(i) {
  slideShowImgContainer.classList.remove("d-none");
  fullSizeImgContainer.classList.add("d-none");
  slideShowRunning(i);
}

function slideShowRunning(i) {
  if (i < imageArray.length) {
    slideShowImgContainer.innerHTML = `
    <div onclick="stopSlideShow(${i})" class="stop-btn" id="slideshowStopBtn">&#9632;</div>
      <img onclick="stopSlideShow(${i})" src="${imageArray[i]}" alt="Image of something" />
    `;

    slideshowTimeout = setTimeout(() => {
      i++;
      slideShowRunning(i);
    }, 3000);
  } else {
    i = 0;
    slideShowRunning(i);
  }
}

function stopSlideShow(i) {
  clearTimeout(slideshowTimeout);
  openFullSizeImg(i);
  slideShowImgContainer.classList.add("d-none");
  fullSizeImgContainer.classList.remove("d-none");
}

// +++ Mobile-Nav +++ //

function toggleMobileNav() {
  let burgerMenu = document.getElementById("burgerMenu");
  let closeMenuCross = document.getElementById("closeMobileNav");
  let mobileLinks = document.getElementById("mobileLinks");
  burgerMenu.classList.toggle("d-none");
  closeMenuCross.classList.toggle("d-none");
  mobileLinks.classList.toggle("d-none");
}

// +++ HTML +++ //

function openFullSizeImgHTML(i) {
  fullSizeImgContainer.innerHTML = `
        <div class="full-size-btn-container" id="fullSizeBtnContainer">
            <div class="x-btn btn-hover" onclick="closeFullSizeImg()">&times;</div>
              <div onclick="fullSizeImgToLeft(${i - 1})" class="arrow left-arrow btn-hover">&laquo;</div>
              <div onclick="fullSizeImgToRight(${
                i + 1
              })" class="arrow right-arrow btn-hover" id="rightArrow">&raquo;</div>
              <div onclick="startSlideShow(${i})" class="play-btn" id="slideshowPlayBtn">&blacktriangleright;</div>
        </div>
            <img onclick="closeFullSizeImg()" src="${imageArray[i]}" alt="" />
  `;
  return;
}

function fullSizeImgToRightHTML(i) {
  fullSizeImgContainer.innerHTML = /*html*/ `
    <div class="full-size-btn-container" id="fullSizeBtnContainer">
        <div class="x-btn btn-hover" onclick="closeFullSizeImg()">&times;</div>
          <div onclick="fullSizeImgToLeft(${i - 1})"class="arrow left-arrow btn-hover">&laquo;</div>
          <div onclick="fullSizeImgToRight(${i + 1})" class="arrow right-arrow btn-hover" id="rightArrow">&raquo;</div>
          <div onclick="startSlideShow(${i})" class="play-btn" id="slideshowPlayBtn">&blacktriangleright;</div>
    </div>
        <img onclick="closeFullSizeImg()" src="${imageArray[i]}" alt="" />
`;
  return;
}

function fullSizeImgToLeftHTML(i) {
  fullSizeImgContainer.innerHTML = /*html*/ `
    <div class="full-size-btn-container" id="fullSizeBtnContainer">
      <div class="x-btn btn-hover" onclick="closeFullSizeImg()">&times;</div>
          <div onclick="fullSizeImgToLeft(${i - 1})" class="arrow left-arrow btn-hover">&laquo;</div>
          <div onclick="fullSizeImgToRight(${i + 1})" class="arrow right-arrow btn-hover" id="rightArrow">&raquo;</div>
          <div onclick="startSlideShow(${i})" class="play-btn" id="slideshowPlayBtn">&blacktriangleright;</div>
    </div>
          <img onclick="closeFullSizeImg()" src="${imageArray[i]}" alt="" />
          `;
  return;
}
