
function remove() {
  var elements = document.getElementsByClassName("overlay_small");
  [].forEach.call(elements, function (e) {
    e.outerHTML = "";
  });
}

setInterval(remove, 1000);