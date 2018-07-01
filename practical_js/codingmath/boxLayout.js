window.onload = function () {

  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  context.fillStyle = "#cccccc";
  context.fillRect(0, 0, 600, 600);
  context.fillStyle = "black";

  var items = [];
  for (let i = 0; i < 35; i++) {
    items.push({
      w: 20 + Math.random() * 80,
      h: 20 + Math.random() * 80
    });
  }

  hbox(items, 10, "center", true);

  function hbox(items, spacing, alignment, wrap) {
    let x = spacing,
      y = spacing,
      maxHeight = 0,
      ypos = 0;

    for (let i = 0; i < items.length; i++) {
      maxHeight = Math.max(maxHeight, items[i].h);
    }

    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      if (wrap && x + item.w + spacing > 600) {
        x = spacing;
        y += maxHeight + spacing;
      }
      if (alignment === "bottom") {
        ypos = maxHeight - item.h;
      } else if (alignment === "center") {
        ypos = (maxHeight - item.h) / 2;
      }
      context.fillRect(x, y + ypos, item.w, item.h);
      x += item.w + spacing;
    }
  }






}