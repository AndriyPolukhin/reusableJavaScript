window.onload = function () {

  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const width = canvas.width = 640;
  const height = canvas.height = 320;
  context.fillRect(0, 0, width, height);

  let scaleMode = "fill";
  // let scaleMode = "showAll";

  let img = document.createElement("img");
  img.addEventListener("load", onImageLoad);
  img.src = "http://codingmath.com/raccoons.jpg";

  function onImageLoad() {
    var imageWidth,
      imageHeight,
      imageAspectRatio = img.width / img.height,
      containerAspectRation = width / height,
      widthFirst = getWidthFirst(scaleMode, imageAspectRatio, containerAspectRation);

    if (widthFirst) {
      imageWidth = width;
      imageHeight = imageWidth / imageAspectRatio;
    } else {
      imageHeight = height;
      imageWidth = imageHeight * imageAspectRatio;
    }

    context.drawImage(img, 0, 0, 1280, 720,
      (width - imageWidth) / 2, (height - imageHeight) / 2, imageWidth, imageHeight);
  }

  function getWidthFirst(scaleMode, imageAspectRatio, containerAspectRatio) {
    if (scaleMode === "showAll") {
      return imageAspectRatio > containerAspectRatio;
    } else {
      return imageAspectRatio < containerAspectRatio;
    }
  }

}