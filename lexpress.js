
function remove() {
  ["cboxOverlay", "colorbox"].forEach(function (e) {
    var node = document.getElementById(e);
    if (node) {
      node.outerHTML = "";
    }
  });
}

setInterval(remove, 1000);