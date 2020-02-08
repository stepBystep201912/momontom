const body = document.querySelector("body"),
  container = body.querySelector(".js-container");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  // const image = new Image();
  // image.src = `images/${imgNumber + 1}.jpg`;
  // image.height = BG_HEIGHT;
  // image.classList.add("bgImage");

  // body.prepend(image);
  console.dir(container);
  container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(images/${imgNumber +
    1}.jpg)`;
  // body.style.backgroundSize = "100%";
  // body.style.backgroundRepeat = "none";
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
