function remove() {
  var style = document.querySelectorAll('div > style');
  if (style[0] && style[0].nextSibling) {
    style[0].nextSibling.outerHTML = "";
  }
}

setInterval(remove, 1000);
