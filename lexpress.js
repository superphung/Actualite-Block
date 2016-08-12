
function remove() {
  var element = document.getElementById("cboxOverlay");
  element.outerHTML = "";

  element = document.getElementById("colorbox");
  element.outerHTML = "";
}

setInterval(remove,1000);